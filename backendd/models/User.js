const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: { type: String,  trim: true, },
    email: { type: String, trim: true, },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;