const { VPointToStack } = require("../models/VPointToStack");

exports.getDistance = async (fromLocations, toLocations) => {
  try {
    const results = await VPointToStack.findOne({
      FROM_VIRTUAL: { $in: fromLocations },
      TO_STACK: { $in: toLocations },
    });

    if (results) {
      return results.WEIGHT;
    }
    return "Not found";
  } catch (err) {
    return "-";
  }
};
