const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const errorMiddleware = require("../middelwares/errorMiddleware.js");
const router = require("./routers/postRouter.js");
dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.POSTS_PORT;

app.use(cors());
app.use(express.json());

app.use("/", router);
app.use(errorMiddleware); // Use the error handling middleware

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
