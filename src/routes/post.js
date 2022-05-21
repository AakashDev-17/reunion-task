const { addPost, deletePost, likePost, unlikePost, getPost, getAllPost } = require("../controllers/post");
const authcheck = require("../middlewares/auth");

const router = require("express").Router();

router
   .get("/:id", authcheck, getPost)
   .get("/", authcheck, getAllPost)
   .post("/", authcheck, addPost)
   .delete("/:id", authcheck, deletePost)
   .post("/like/:id", authcheck, likePost)
   .post("/unlike/:id", authcheck, unlikePost)

module.exports = router;