require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const dbConn = require('./src/db/db');
const authRoutes = require("./src/routes/auth");
const userRoutes = require("./src/routes/user");
const postRoutes = require("./src/routes/post");
const commentRoutes = require("./src/routes/comment");

app.use(cors());
app.use(express.json());

dbConn();

app.get("/", (req, res) => res.send(`Server running on PORT: ${PORT}`));
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));