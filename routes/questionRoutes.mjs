import express from "express";
import { createQuestion, getAllQuestions } from "../controllers/questionController.mjs";

const router = express.Router();

router.post("/", createQuestion);
router.get("/", getAllQuestions);

export default router;
