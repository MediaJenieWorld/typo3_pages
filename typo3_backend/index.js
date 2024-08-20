const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./Models/Contact");
require("dotenv").config();

const app = express();
const port = 5055;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const cloudUrl = process.env.CLOUD_URL;
const localUrl = process.env.LOCAL_URL;

const dbUrl = cloudUrl;

mongoose.connect(dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error.message);
});
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hello, This is MediaJenie Typo-3 Server !");
});
app.post("/addContactDetails", async (req, res) => {
  try {
    const body = req.body;
    if (!body.email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const createNewForm = new Contact(body);

    await createNewForm.save();

    return res.status(201).json(createNewForm);
  } catch (error) {
    console.error("Error saving contact:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while saving the contact." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
