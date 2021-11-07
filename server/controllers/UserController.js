
exports.getUserData = (req, res) => {
  return res.status(200).json(req.user);
};