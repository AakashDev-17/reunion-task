const jwt = require("jsonwebtoken");

const authcheck = (req, res, next) => {
   try {
      const token = req.headers.authorization;
      if(token) {
         const decode = jwt.verify(token, process.env.JWTSECRET);
         if(decode) {
            req.user = decode.userId;
            next();
         } else {
            return res.status(500).json({msg: "invalid token"});
         }
      }
   } catch (err) {
      return res.status(500).json({msg: "invalid token"});
   }
}

module.exports = authcheck;