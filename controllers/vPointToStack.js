const { VPointToStack } = require("../models/VPointToStack");

exports.getPickzeit = async (req, res) => {
  const data = req.body;
  const fromLocations = data.map(({ fromLocation }) => fromLocation);
  const toLocations = data.map(({ toLocation }) => toLocation);
  const results = await VPointToStack.find({
    FROM_VIRTUAL: { $in: fromLocations },
    TO_STACK: { $in: toLocations },
  });
  var weightSum = 0;
  results.forEach(({ WEIGHT }) => {
    weightSum += WEIGHT;
  });
  res.status(200).json({ weightSum: weightSum });
};
