require("dotenv").config();

const config = {
  port: 8080,
  mongourl: process.env.MONGOURL,
};

module.exports = config;
