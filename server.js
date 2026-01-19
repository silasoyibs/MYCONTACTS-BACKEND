const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = 5000;
console.log("I am in express project");
// phaser
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
// middleware
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
