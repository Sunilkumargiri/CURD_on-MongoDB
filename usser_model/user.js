const mongoose = require("mongoose");

// MongoDB connection
mongoose.connect(
  "connection key"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  image: String,
  name: String,
  email: String
});

// Model export
module.exports = mongoose.model("User", userSchema);
