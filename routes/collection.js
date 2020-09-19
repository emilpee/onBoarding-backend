const Collection = require('../schemas/collection')

module.exports.get = async (req, res) => {
    try {
        res.status(200).send(await Collection.find({}))
    } catch (err) {
        res.status(500).send(err.stack)
    }
}   

module.exports.post = async (req, res) => {
    try {
        let gameToCollection = await Collection.create(req.body);
        res.status(200).send(gameToCollection)
    } catch (err) {
        res.status(500).send(err.stack)
    }
}
