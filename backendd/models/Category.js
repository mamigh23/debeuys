const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    name: { type: String, requierd: true },
  },
  { timestamps: true } 
);

const Category = mongoose.model("Category" ,CategorySchema);

module.exports= Category