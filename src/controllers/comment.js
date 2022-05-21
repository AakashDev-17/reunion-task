const Comment = require("../models/comment");
const Post = require("../models/post");

const commentCtrl = {
  addComment: async (req, res) => {
    try {
       const userId = req.user;
       const postId = req.params.id;
       let postData = await Post.findById(postId);
       if(!postData) return res.status(400).json({msg: "post not found"});
       const newComment = new Comment({userId, postId, comment: req.body.comment});
       const data = await newComment.save();
       if(data) {
         postData = await Post.findByIdAndUpdate(postId, {$addToSet: {comments: data._id}});
         return res.status(200).json({comment: data.comment, id: data._id});
       } else {
          return res.status(500).json({msg: "Comment failed"});
       }
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
};

module.exports = commentCtrl;
