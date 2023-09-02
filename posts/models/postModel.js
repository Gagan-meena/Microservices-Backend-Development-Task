const mongoose = require("mongoose");
const mongoConnection = require("../../gateway/database/postsDb.js");

// Define a schema for posts
const postSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
      immutable: true,
    },
    username: {
      type: String,
      required: true,
      immutable: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoConnection.model("Posts", postSchema);

module.exports = Posts;
