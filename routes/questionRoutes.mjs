import express from "express";
import { createQuestion } from "../controllers/questionController.mjs";

const router = express.Router();

router.post("/", createQuestion);

export default router;
