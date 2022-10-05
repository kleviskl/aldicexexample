const { VPointToStack } = require("../models/VPointToStack");

exports.getDistance = async (distance) => {
  try {
    const results = await VPointToStack.find({
      FROM_VIRTUAL: { $in: fromLocations },
      TO_STACK: { $in: toLocations },
    });
  } catch (err) {
    return "-";
  }
};
