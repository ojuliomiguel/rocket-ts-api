import express from "express";
import { PingController } from "../controllers/ping";
import { CommentRouter } from "./comment.router";
import { PostRouter } from "./post.router";
import { UserRouter } from "./user.router";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/users", UserRouter);
router.use("/posts", PostRouter);
router.use("/comments", CommentRouter);

export {router};