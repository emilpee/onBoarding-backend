const Collection = require('../schemas/collection')

module.exports.get = async(req, res) => {
    try {
        let user = await Collection.findOne({ id: req.params.id });
        res.status(200).send(user);
    } catch(err) {
        res.status(500).send(err.stack);
    }
}

module.exports.delete = async (req, res) => {
    try {
      res.status(200).send(await Collection.findOneAndDelete({_id: req.params.id}))
  } catch(err) {
      res.status(500).send(err.stack);
  }
}