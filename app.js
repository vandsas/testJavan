const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./src/config");
const connectDB = require("./src/connect");
const routes = require("./src/routes");

const port = config.port;

connectDB();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
