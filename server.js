// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
// app.use(cors());

// Sample GET Route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Sample POST Route
app.post("/api/data", (req, res) => {
  try {
    const { name, email, personal_Whatsapp, password } = req.body;

    console.log(name, email, personal_Whatsapp, password);

    return res
      .status(200)
      .json({ message: { name, email, personal_Whatsapp, password } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
