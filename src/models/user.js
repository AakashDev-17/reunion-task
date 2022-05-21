const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   username: {
      type: String,
      require: true,
      unique: true,
   },
   email: {
      type: String,
      require: true,
   },
   password: {
      type: String,
      require: true,
   },
   followers: [{
      type: mongoose.Types.ObjectId,
   }],
   following: [{
      type: mongoose.Types.ObjectId,
   }],
},{timestamps: true});

module.exports = mongoose.model('user', userSchema);