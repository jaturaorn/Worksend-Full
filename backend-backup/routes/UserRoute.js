import express from "express";
import {
  getUser,
  createUser,
  getUserByID,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

router.route("/").get(getUser).post(createUser);

router.route("/:id").get(getUserByID).put(updateUser).delete(deleteUser);

export default router;
