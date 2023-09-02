const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const username = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

// Create a Sequelize instance
const sequelize = new Sequelize({
  database,
  username,
  password,
  host,
  port,
  dialect: "postgres",
  logging: false,
});
console.log(username);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.log("unable to connect db", error);
  }
};

module.exports = { sequelize, connectDB };
