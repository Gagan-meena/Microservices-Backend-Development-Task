const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("../gateway/database/usersDb.js");
const errorMiddleware = require("../middelwares/errorMiddleware.js");
const router = require("./routers/userRouter.js");

dotenv.config({ path: "../.env" });

const app = express();

const PORT = process.env.USER_PORT || 3000;
app.use(cors());

connectDB();
app.use(express.json());
app.use("/", router);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
