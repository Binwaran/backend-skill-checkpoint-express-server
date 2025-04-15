import pool from "../utils/db.mjs";

export const insertQuestion = async (title, description, category) => {
  const result = await pool.query(
    "INSERT INTO questions (title, description, category) VALUES ($1, $2, $3) RETURNING *",
    [title, description, category]
  );
  return result.rows[0];
};

export const fetchAllQuestions = async () => {
  const result = await pool.query("SELECT * FROM questions ORDER BY id ASC");
  return result.rows;
};


export const fetchQuestionById = async (id) => {
    const result = await pool.query("SELECT * FROM questions WHERE id = $1", [id]);
    return result.rows[0];
  };

  export const updateQuestionById = async (id, title, description, category) => {
    const result = await pool.query(
      "UPDATE questions SET title = $1, description = $2, category = $3 WHERE id = $4 RETURNING *",
      [title, description, category, id]
    );
    return result.rows[0];
  };
  
  export const deleteQuestionById = async (id) => {
    const result = await pool.query(
      "DELETE FROM questions WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  };
  
