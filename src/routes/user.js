const { follow, unfollow, getUser } = require("../controllers/user");
const authcheck = require("../middlewares/auth");

const router = require("express").Router();

router
   .get("/", authcheck, getUser)
   .put('/follow/:id', authcheck, follow)
   .put('/unfollow/:id', authcheck, unfollow);

module.exports = router;