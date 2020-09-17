const mongoose = require('mongoose')

const userSettingsSchema = new mongoose.Schema(
    {
        age: {
            type: Number,
            unique: false,
            required: false,
        },
        country: {
            type: String,
            unique: false,
            required: false,
        },
    },
    { timestamps: false },
)

const UserSettings = mongoose.model('UserSettings', userSettingsSchema)

module.exports = UserSettings
