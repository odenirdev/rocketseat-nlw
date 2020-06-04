import express from "express";

import PointsController from "./controllers/points";
const pointsController = new PointsController();

import ItemsController from "./controllers/items";
const itemsController = new ItemsController();

const routes = express.Router();

routes.get("/items", itemsController.index);

routes.post("/points", pointsController.create);

routes.get("/points", pointsController.index);

routes.get("/points/:id", pointsController.show);

export default routes;
