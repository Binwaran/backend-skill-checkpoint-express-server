import { insertQuestion } from "../models/questionModel.mjs";

export const createQuestion = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const newQuestion = await insertQuestion(title, description, category);
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error("Error creating question:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
