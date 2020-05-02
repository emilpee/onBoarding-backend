const express = require('express')
const mongoose = require('mongoose')
const oauth = require('./routes/oauth')

const app = express()
app.route('/oauth').get(oauth.get)

mongoose.set('useCreateIndex', true)
const db = `mongodb+srv://admin-emil:${process.env.PASSWORD}@userdata-43fxt.mongodb.net/test?retryWrites=true&w=majority`
mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB!')
    })
    .catch(({ stack }) => {
        throw new Error(stack)
    })

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
