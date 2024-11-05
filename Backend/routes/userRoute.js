import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

// require data of the user i.e. email and pwd for creating user
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
