const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const oauth = require('./routes/oauth')
const user = require('./routes/users')
const mongo = require('./api/mongo')
const app = express()

app.use(cors())
app.route('/oauth').get(oauth.get)
app.route('/users').get(user.get)
app.route('/users/:id').get(user.get)

mongoose.set('useCreateIndex', true)
const db = `mongodb+srv://admin-emil:${mongo.password}@userdata-43fxt.mongodb.net/test?retryWrites=true&w=majority`
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
