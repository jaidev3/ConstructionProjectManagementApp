const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
  },
  material_name: { type: String, required: true },
  quantity: { type: Number, required: true },
  rate: { type: Number, required: false },
  price: { type: Number, required: true },
  description: { type: String, required: false },
  progress: { type: Number, default: 0 },
});

module.exports = mongoose.model("material", MaterialSchema);
