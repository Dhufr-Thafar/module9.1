const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  title: { type: String, trim: true, required: true },
  body: { type: String, trim: true, required: true },
  useId: { type: mongoose.Schema.Types.ObjectId, ref:"user" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("user", userSchema);