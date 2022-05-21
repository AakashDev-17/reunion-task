const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
   userId: {
      type: mongoose.Types.ObjectId,
      require: true,
   },
   postId: {
      type: mongoose.Types.ObjectId,
      require: true,
   },
   comment: {
      type: String,
      required: true,
   }
},{timestamps: true});

module.exports = mongoose.model('comment', commentSchema);