const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const uri = process.env.MONGODB_URI;
const mongoConnection = mongoose.createConnection(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoConnection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoConnection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
module.exports = mongoConnection;
