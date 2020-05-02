import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        id: {
            type: String | Number,
            unique: true,
            required: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
        },
        country: {
            type: String,
            unique: false,
            required: false,
        },
        age: {
            type: Number,
            unique: false,
            required: false,
        },
    },
    { timestamps: true },
)

const User = mongoose.model('User', userSchema)

export default User
