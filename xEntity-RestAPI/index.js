const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Create test end-point
app.get("/xApp", (req, res) => {
  res.send("xEntity Rest-API App  is running...");
});

//Create get rest end-points for xentities
app.get("/xApp/logs", (req, res) => {
  res.json([
    { id: "A001", createdAt: "01-Jan-2019", createdBy: "John" },
    { id: "A002", createdAt: "01-Feb-2020", createdBy: "Steve" },
    { id: "A003", createdAt: "01-March-2021", createdBy: "Keith" },
  ]);
});

//Start the Server
app.listen(port, () =>
  console.log(`XEntity Rest-API app listening on port ${port}!`)
);
