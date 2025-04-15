import { insertQuestion, fetchAllQuestions, fetchQuestionById } from "../models/questionModel.mjs";

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

export const getAllQuestions = async (req, res) => {
    try {
      const questions = await fetchAllQuestions();
      res.json(questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const getQuestionById = async (req, res) => {
    try {
      const id = req.params.id;
      const question = await fetchQuestionById(id);
  
      if (!question) {
        return res.status(404).json({ error: "Question not found" });
      }
  
      res.json(question);
    } catch (error) {
      console.error("Error fetching question by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };