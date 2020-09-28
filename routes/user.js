const User = require("../schemas/user");

module.exports.get = async (req, res) => {
  try {
    let user = await User.findOne({ id: req.params.id });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.stack);
  }
};
