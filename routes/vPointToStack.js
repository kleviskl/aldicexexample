var express = require("express");
const { getPickzeit } = require("../controllers/vPointToStack");
var router = express.Router();

router.post("/", getPickzeit);

module.exports = router;
