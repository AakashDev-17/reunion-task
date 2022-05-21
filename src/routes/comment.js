const router = require("express").Router();
const { addComment } = require("../controllers/comment");
const authCheck = require("../middlewares/auth");

router
   .post("/:id", authCheck, addComment)

module.exports = router;