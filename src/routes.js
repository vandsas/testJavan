const express = require("express");
const routes = express.Router();
const controller = require("./controller");

routes.get("/", controller.getAllUsers);
routes.get("/users", controller.getAllUsers);
routes.get("/users/:id", controller.getUserById);
routes.post("/users", controller.createUser);
routes.put("/users/:id", controller.updateUserById);
routes.delete("/users/:id", controller.deleteUserById);

module.exports = routes;
