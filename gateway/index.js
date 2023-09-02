const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const app = express();

const PORT = process.env.GATEWAY_PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/users", proxy("http://localhost:3000"));
app.use("/posts", proxy("http://localhost:3001"));

app.use((err, req, res, next) => {
  console.error("Proxy Error:", err);
  res.status(500).json({ error: "Proxy Error" });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
