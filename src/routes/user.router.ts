import express from "express";
import { UserController } from "../controllers/user.controller";

const UserRouter = express.Router();

UserRouter.get("/", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();
  return res.send(response);
});

UserRouter.post("/", async (req, res) => {
  const controller = new UserController();
  const response = await controller.createUser(req.body);
  return res.send(response);
});

UserRouter.get("/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getUser(req.params.id);
  if (!response) res.status(404).send({ message: "No user found" });
  return res.send(response);
});

export { UserRouter };