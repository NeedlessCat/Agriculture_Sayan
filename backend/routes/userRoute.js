import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
// import multer from "multer";

// const upload = multer();

const userRouter = express.Router();

// userRouter.post("/register", upload.none(), registerUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
