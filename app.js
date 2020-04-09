const express = require('express')
const app = express()
const oauth = require('./routes/oauth')

app.route('/oauth').get(oauth.get)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
