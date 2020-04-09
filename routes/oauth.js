const { client_id, client_secret } = require('../api/boardgameatlas')
const axios = require('axios')
const qs = require('qs')

module.exports.get = (req, res) => {
    const requestToken = req.query.code

    let data = {
        client_id,
        client_secret,
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
            res.redirect(`http://localhost:3000/dashboard?access_token=${accessToken}`)
        })
        .catch((err) => {
            throw new Error(err.response)
        })
}
