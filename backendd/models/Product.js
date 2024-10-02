const mongoose = require("mongoose");

const PrdocuctSchema = mongoose.Schema( 
  {
    name: { type: String, requierd: true },
    img: [{ type: String, requierd: true }],
    description: [{ type: String, requierd: true }],
    sizes: [{ type: String, requierd: true }],
    price: {
      current: { type: Number, required: true },
      discount: { type: Number },
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
      description: { type: String, required: true },
  },
  { timestamps: true }
);

const Prdocuct = mongoose.model("Prdocuct", PrdocuctSchema);

module.exports = Prdocuct;
