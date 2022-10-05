const env = require("dotenv");

const express = require("express");
const mongoose = require("mongoose");
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const fse = require("fs-extra");
const excelToJSON = require("convert-excel-to-json");

const { getDistance } = require("./utils/getDistance");

// environment variables
env.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const FILE_NAME = "data.xlsx";
const NEW_PATH = __dirname + "/files/";

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

app.post("/upload", async (req, res) => {
  try {
    const file = req.files.file;

    // delete all files in files directory
    fse.emptyDirSync(NEW_PATH);

    await file.mv(`${NEW_PATH}${FILE_NAME}`);

    return res
      .status(200)
      .json({ status: "SUCCESS", message: "File uploaded" });
  } catch (error) {
    console.log("Error is: ", error);
    return res
      .status(500)
      .json({ status: "ERROR", message: "Could not upload file" });
  }
});

app.get("/read-upload", async (_, res) => {
  try {
    // convert uploaded Excel file to JSON
    const excelData = excelToJSON({
      sourceFile: `files/${FILE_NAME}`,
      header: {
        rows: 1,
      },
      columnToKey: {
        "*": "{{columnHeader}}",
      },
    });

    // Check worksheet "Beispiel Zone X" exists and contains data
    if (
      excelData &&
      excelData["Beispiel Zone X"] &&
      excelData["Beispiel Zone X"].length
    ) {
      const data = excelData["Beispiel Zone X"];

      // TODO: Check excel data keys validation

      let outputData = [];

      for (let i = 0; i < data.length; i++) {
        const {
          ["Warehouse Order"]: warehoouseOrder,
          ["Source Storage Bin"]: sourceStorageBin,
          Product,
          ["Product Short Description"]: productShortDescription,
          ["Src Trgt Qty BUoM"]: srcTrgtQtyBUoM,
          ["Minimum Order Quantity"]: minimumOrderQuantity,
          ["Loading Weight"]: loadingWeight,
          ["Weight Unit"]: weightUnit,
          ["Loading Volume"]: loadingVolume,
          ["Volume Unit"]: volumeUnit,
          Wave,
          Sequence,
          Route,
          ["Warehouse Task"]: warehouseTask,
          ["Warehouse Process Cat. Desc."]: warehouseProcessCatDesc,
          ["Confirmation Date"]: confirmaationDate,
          ["Confirmation Time"]: confirmationTime,
          ["Ship-to"]: shipTo,
        } = data[i];

        const fromLocation = i === 0 ? "dashboard" : sourceStorageBin;

        // set the last toLocation to equal "konsoplatz"
        const toLocation =
          i === data.length - 1 ? "konsoplatz" : sourceStorageBin;
        const pickTime = await getDistance(fromLocation, toLocation);

        // check if pick time is a number
        // if it is, divide by 65 else set a dash '-'
        const computedWalkTime =
          typeof pickTime === "number" ? (pickTime / 65).toFixed(2) : "-";

        const outputObject = {
          "Warehouse Order": warehoouseOrder,
          From: fromLocation,
          To: toLocation,
          Product,
          "Product Short Description": productShortDescription,
          "Src Trgt Qty BUoM": srcTrgtQtyBUoM,
          "Qty per Minimum Order Quantity": minimumOrderQuantity,
          Picks: 1, // TODO: Calculate Picks
          "Loading Weight": loadingWeight,
          "Weight Unit": weightUnit,
          "Loading Volume": loadingVolume,
          Wave,
          Route,
          "Warehouse Task": warehouseTask,
          "Warehouse Process Cat. Desc.": warehouseProcessCatDesc,
          "Confirmation Date": confirmaationDate,
          "Confirmation Time": confirmationTime,
          "Ship-to": shipTo,
          "PickTime [min]": pickTime,
          "Distance [m]": "100",
          "Walk Time [min]": computedWalkTime,
        };

        outputData.push(outputObject);
      }

      return res
        .status(200)
        .json({ status: "SUCCESS", message: "Success", data: outputData });
    }
    return res.status(500).json({
      status: "ERROR",
      message: "Worksheet Beispiel Zone X not found",
    });
  } catch (error) {
    console.log("Error is: ", error);
  }
});

app.get("/download", (req, res) => {
  return res.download(`${NEW_PATH}${FILE_NAME}`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
