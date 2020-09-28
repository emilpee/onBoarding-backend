const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  games: [
    {
      id: {
        type: String,
        unique: true,
      },
    },
  ],
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
