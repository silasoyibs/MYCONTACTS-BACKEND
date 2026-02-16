const app = require("./app");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

// connect database
connectDb();

const port = process.env.PORT || 5000;
console.log("I am in express project");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
