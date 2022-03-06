const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
  },
  payment: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: false},
  type:{type:String,required:true}
});

module.exports = mongoose.model("payment", PaymentSchema);
