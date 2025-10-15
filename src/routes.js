const express = require("express");
const routes = express.Router();
const controller = require("./controller");

routes.get("/", controller.getAllUsers);
routes.get("/:id", controller.getUserById);
routes.post("/", controller.createUser);
routes.put("/:id", controller.updateUserById);
routes.delete("/:id", controller.deleteUserById);

module.exports = routes;
