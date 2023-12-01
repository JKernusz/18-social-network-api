const { Thoughts, User } = require("../models");
exports.createThought = async (req, res) => {
  try {
    if (!req.body.userId) {
      return res.status(400).json({
        message: "Please enter a userId",});
      }
      const user = await User.findById(req.body.userId);
      if (!user) {
        return res.status(400).json({
          message: "Please enter a valid userId",
        });
      }
      const thought = await Thoughts.create({
      ...req.body,
        userId: req.body.userId,
      });
      res.status(200).json(thought);
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  };
};
exports.addReaction = async (req, res) => {
  try {
    const thought = await Thoughts.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    );
    res.status(200).json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.removeReaction = async (req, res) => {
    try {
      const thought = await Thoughts.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: {_id: req.params.reactionId } } },
        { new: true }
      );
      res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  exports.updateThought = async (req, res) => {
    try {
      const thought = await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  exports.deleteThought = async (req, res) => {
    try {
      const thought = await Thoughts.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  exports.getThoughtById = async (req, res) => {
    try {
      const thought = await Thoughts.findOne({ _id: req.params.thoughtId });
      res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };

  exports.getAllThoughts = async (req, res) => {
    try {
      const thoughts = await Thoughts.find();
      res.status(200).json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
