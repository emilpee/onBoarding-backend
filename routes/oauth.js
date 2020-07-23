const { CLIENT_ID, CLIENT_SECRET } = require('../api/boardgameatlas')
const axios = require('axios')
const qs = require('qs')
const User = require('../schemas/user')

module.exports.get = (req, res) => {
    const requestToken = req.query.code

    let data = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: requestToken,
        redirect_uri: `http://localhost:8080/oauth`,
        grant_type: 'authorization_code',
    }

    axios({
        url: '/oauth/token',
        method: 'POST',
        baseURL: 'https://www.boardgameatlas.com/',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
    })
        .then((response) => {
            const accessToken = response.data.access_token
            axios
                .get(`https://www.boardgameatlas.com/api/user/data?client_id=${client_id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then(({ data }) => {
                    let loginUser = data.user
                    User.countDocuments({ id: loginUser.id }, (err, count) => {
                        if (count > 0) {
                            return
                        } else {
                            let newUser = {
                                id: loginUser.id,
                                username: loginUser.username,
                                country: '',
                                age: null,
                            }
                            User.create(newUser)
                        }
                    })
                })

            res.status(200).redirect(`http://localhost:3000/dashboard?access_token=${accessToken}`)
        })
        .catch((err) => {
            throw new Error(err.response)
        })
}
