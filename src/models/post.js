const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
   userId: {
      type: mongoose.Types.ObjectId,
      require: true,
   },
   likes: [{
      type: mongoose.Types.ObjectId,
   }],
   unlikes: [{
      type: mongoose.Types.ObjectId,
   }],
   comments: [{
      type: mongoose.Types.ObjectId,
      ref: "comment"
   }],
   title: {
      type: String,
      require: true,
   },
   description: {
      type: String,
      require: true,
   },

},{timestamps: true});

module.exports = mongoose.model('post', postSchema);