const User = require("../models/user");

const usrCtrl = {
  follow: async (req, res) => {
    try {
      const otherID = req.params.id;
      const userID = req.user;
      let othersdata = await User.findById(otherID); // others = whom we want to follow
      let usersdata = await User.findById(userID); // user = us
      if (othersdata && usersdata) {
        othersdata = await User.findByIdAndUpdate(otherID, {
          $addToSet: { followers: userID },
        });
        usersdata = await User.findByIdAndUpdate(userID, {
          $addToSet: { following: otherID },
        });
        if (othersdata && usersdata) {
          return res
            .status(200)
            .json({ msg: `You are now following ${othersdata.username}` });
        }
      } else {
        return res.status(400).json({ msg: "User not found" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },

  unfollow: async (req, res) => {
    try {
      const otherID = req.params.id;
      const userID = req.user;
      let othersdata = await User.findById(otherID); // others = whom we want to unfollow
      let usersdata = await User.findById(userID); // user = us
      if (othersdata && usersdata) {
        othersdata = await User.findByIdAndUpdate(otherID, {
          $pull: { followers: userID },
        });
        usersdata = await User.findByIdAndUpdate(userID, {
          $pull: { following: otherID },
        });
        if (othersdata && usersdata) {
          return res
            .status(200)
            .json({ msg: `You unfollowed ${othersdata.username}` });
        }
      } else {
        return res.status(400).json({ msg: "User not found" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = req.user;
      const data = await User.findById(user);
      if (data) {
        const { username, followers, following } = data;
        return res
          .status(200)
          .json({
            data: {
              username,
              followers: followers.length,
              following: following.length,
            },
          });
      } else {
        return res.status(400).json({ msg: "User not found" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err });
    }
  },
};

module.exports = usrCtrl;
