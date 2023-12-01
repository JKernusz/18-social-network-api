const { Thoughts, User } = require("../models");
const { objectId } = require("mongoose").Types;

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate("thoughts")
      .populate("friends")
      .select("-__v -password");
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .select("-__v -password")
      .populate("thoughts")
      .populate("friends");
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.addFriend = async (req, res) => {
  try {
    const friend = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { new: true }
    );
    res.status(200).json(friend);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.removeFriend = async (req, res) => {
  try {
    const friend = await User.findByIdAndUpdate(
      req.params.userId ,
      { $pull: { friends: req.params.friendId } },
      { new: true }
      
    );
    res.status(200).json(friend);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
