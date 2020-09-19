const mongoose = require('mongoose')

// TODO - Save with user ID?.

const collectionSchema = new mongoose.Schema(
    {
        gameId: {
            type: String,
            unique: true,
            required: true,
        },
    },
    { timestamps: false },
)

const Collection = mongoose.model('Collection', collectionSchema)

module.exports = Collection
