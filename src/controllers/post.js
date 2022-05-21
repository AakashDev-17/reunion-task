const Post = require("../models/post");
const Comment = require("../models/comment");

const postCtrl = {
  getPost: async (req, res) => {
    try {
      const _id = req.params.id;
      const data = await Post.findById(_id).populate("comments", {postId:0, updatedAt:0, __v:0}).exec();
      if (data) {
        return res
          .status(200)
          .json({
            id: data._id,
            title: data.title,
            description: data.description,
            likes: data.likes.length,
            comments: data.comments,
            createdAt: data.createdAt
          });
      } else {
        return res.status(400).json({ msg: "post not found" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err });
    }
  },

  getAllPost: async (req, res) => {
    try {
      const userId = req.user;
      const data = await Post.find({userId}, {unlikes:0, updatedAt:0, __v:0}).sort({'createdAt': -1}).populate("comments", {postId:0, updatedAt:0, __v:0}).exec();
      if (data) {
        return res
          .status(200)
          .json(data);
      } else {
        return res.status(400).json({ msg: "post not found" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err });
    }
  },

  addPost: async (req, res) => {
    try {
      const userId = req.user;
      const { title, description } = req.body;
      const newPost = new Post({ userId, title, description });
      const data = await newPost.save();
      if (data) {
        const { _id, title, description, createdAt } = data;
        return res.status(200).json({
          postID: _id,
          title,
          description,
          createdAt,
        });
      } else {
        return res.status(500).json({ msg: "Post not saved !!" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },

  deletePost: async (req, res) => {
    try {
      const _id = req.params.id;
      await Comment.deleteMany({ postId: _id });
      const data = await Post.findByIdAndDelete(_id);
      if (data) {
        return res.status(200).json({ msg: "Post deleted successfully" });
      } else {
        return res.status(500).json({ msg: "Post not found !!" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },

  likePost: async (req, res) => {
    try {
      const userId = req.user;
      const _id = req.params.id;
      const data = await Post.findByIdAndUpdate(
        _id,
        { $addToSet: { likes: userId }, $pull: { unlikes: userId } },
        { new: true }
      );
      if (data) {
        return res.status(200).json({ msg: "post liked" });
      } else {
        return res.status(500).json({ msg: "something went wrong" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },

  unlikePost: async (req, res) => {
    try {
      const userId = req.user;
      const _id = req.params.id;
      const data = await Post.findByIdAndUpdate(
        _id,
        { $pull: { likes: userId }, $addToSet: { unlikes: userId } },
        { new: true }
      );
      if (data) {
        return res.status(200).json({ msg: "post unliked" });
      } else {
        return res.status(500).json({ msg: "something went wrong" });
      }
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
};

module.exports = postCtrl;
