const mongoose = require("mongoose");

var vPointToStackSchema = mongoose.Schema({
  PICK_ZONE: String,
  FROM_VIRTUAL: String,
  TO_STACK: String,
  WEIGHT: Number,
});

var VPointToStack = mongoose.model(
  "vPointToStack",
  vPointToStackSchema,
  "vPointToStack"
);
module.exports.VPointToStack = VPointToStack;
