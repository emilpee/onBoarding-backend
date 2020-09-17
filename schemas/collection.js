const mongoose = require('mongoose')

// TODO - Implement typescript.

const collectionSchema = new mongoose.Schema(
    {
        gameIds: {
            type: Array,
            unique: false,
            required: false,
        },
    },
    { timestamps: false },
)

const Collection = mongoose.model('UserSettings', collectionSchema)

module.exports = Collection
