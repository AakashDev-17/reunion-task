const User = require("../models/user");
const jwt = require("jsonwebtoken");

const authCtrl = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const data = await User.findOne({ email, password });
      if (data) {
        const token = await jwt.sign(
          { username: data.username, userId: data._id },
          process.env.JWTSECRET
        );
        return res.status(200).json({ data, token });
      } else {
        return res.status(400).json({
          msg: "user not found",
        });
      }
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },

  signup: async (req, res) => {
    try {
      const { email, username, password } = req.body;
      let data = await User.findOne({ email });
      if (data) {
        return res.status(500).json({ msg: "User already exists" });
      } else {
        const newUser = new User({ email, username, password });
        data = await newUser.save();
        if (data) {
          return res.status(200).json({ data });
        } else {
          return res.status(500).json({ msg: "something went wrong" });
        }
      }
    } catch (err) {
       console.log(err);
      res.status(500).json({ msg: err });
    }
  },
};

module.exports = authCtrl;
