const { client_id, client_secret } = require('./api/boardgameatlas')
const express = require('express')
const axios = require('axios')
const app = express()
const qs = require('qs')

app.get('/', (req, res) => {
    res.send('This is a start page')
})

app.get('/oauth', (req, res) => {
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
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
