const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const oauth = require('./routes/oauth')
const user = require('./routes/user')
const users = require('./routes/users')
const collection  = require('./routes/collection')
const mongo = require('./api/mongo')
const app = express()
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json())

app.route('/oauth')
.get(oauth.get)

app.route('/users')
.get(users.get)

app.route('/users/:id')
.get(user.get)

app.route('/collection/:id')
.get(collection.get)
.post(collection.post)
.delete(collection.delete)

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
