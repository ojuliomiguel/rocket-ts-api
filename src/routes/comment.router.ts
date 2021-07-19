import express from "express";
import { CommentController } from "../controllers/comment.controller";

const CommentRouter = express.Router();

CommentRouter.get("/", async (_req, res) => {
  const controller = new CommentController();
  const response = await controller.getComments();
  return res.send(response);
});

CommentRouter.post("/", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.createComment(req.body);
  return res.send(response);
});

CommentRouter.get("/:id", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.getComment(req.params.id);
  if (!response) res.status(404).send({ message: "No comment found" });
  return res.send(response);
});

export { CommentRouter };