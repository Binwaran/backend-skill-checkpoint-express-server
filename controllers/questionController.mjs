import { insertQuestion, fetchAllQuestions, fetchQuestionById,updateQuestionById,deleteQuestionById, searchQuestions } from "../models/questionModel.mjs";

export const createQuestion = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    // ✅ Validation
    if (!title || !description || !category) {
        return res.status(400).json({ error: "All fields are required." });
      }
  
      if (
        typeof title !== "string" ||
        typeof description !== "string" ||
        typeof category !== "string"
      ) {
        return res.status(400).json({ error: "All fields must be strings." });
      }
  

    const newQuestion = await insertQuestion(title, description, category);
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error("Error creating question:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllQuestions = async (req, res) => {
    try {
      const { search } = req.query;
      let result;
  
      if (search) {
        result = await searchQuestions(search);
      } else {
        result = await fetchAllQuestions();
      }
  
      res.json(result);
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

  export const updateQuestion = async (req, res) => {
    try {
      const id = req.params.id;
      const { title, description, category } = req.body;

      console.log("🧠 update ID:", id);
      console.log("🧠 body:", req.body);
  
      if (!title || !description || !category) {
        return res.status(400).json({ error: "All fields are required." });
      }
  
      const updated = await updateQuestionById(id, title, description, category);
      if (!updated) {
        return res.status(404).json({ error: "Question not found." });
      }
  
      res.json(updated);
    } catch (error) {
      console.error("Error updating question:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  export const deleteQuestion = async (req, res) => {
    try {
      const id = req.params.id;
      const deleted = await deleteQuestionById(id);
      if (!deleted) {
        return res.status(404).json({ error: "Question not found." });
      }
      res.json({ message: "Question deleted successfully." });
    } catch (error) {
      console.error("Error deleting question:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  