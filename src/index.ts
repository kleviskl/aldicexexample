import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (_, res) => {
  res.send("Hello server");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
