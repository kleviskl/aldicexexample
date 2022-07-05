const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const path = require("path");
const app = express();
const cors = require("cors");
let bodyParser = require("body-parser");

// routes
const vPointToStackRoutes = require("./routes/vPointToStack");

// environment variables
env.config();

// mongodb connection
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection is established");
  }
);

// greeting route
app.get("/", (req, res) => {
  res.send("Backend APIs working...!!!");
});

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api/vPointToStack", vPointToStackRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
