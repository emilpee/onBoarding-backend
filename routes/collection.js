const Collection = require("../schemas/collection");

module.exports.get = async (req, res) => {
  try {
    let collection = await Collection.findOne({ id: req.params.id });
    res.status(200).send(collection);
  } catch (err) {
    res.status(500).send(err.stack);
  }
};

module.exports.post = async (req, res) => {
  try {
    const { games } = req.body;

    Collection.countDocuments({ id: req.params.id }, (err, count) => {
      if (err) {
        throw new Error(err);
      } else {
        if (count > 0) {
          return;
        } else {
          let newCollection = {
            id: req.params.id,
          };
          Collection.create(newCollection);
        }
      }
    });

    res
      .status(200)
      .send(
        await Collection.findOneAndUpdate(
          { _id: req.params._id },
          { $set: { games: req.body.games } },
          { useFindAndModify: false }
        )
      );
  } catch (err) {
    res.status(500).send(err.stack);
  }
};

module.exports.delete = async (req, res) => {
  try {
    res
      .status(200)
      .send(await Collection.findOneAndDelete({ id: req.params.id }));
  } catch (err) {
    res.status(500).send(err.stack);
  }
};
