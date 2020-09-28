const User = require("../schemas/user");

module.exports.get = async (req, res) => {
  try {
    res.status(200).send(await User.find({}));
  } catch (err) {
    res.status(500).send(err.stack);
  }
};
