const mongoose = require("mongoose");
const DBURL = process.env.DBURL;

const dbConn = () => {
  mongoose
    .connect(DBURL)
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log("DB connection failed"));
};

module.exports = dbConn;