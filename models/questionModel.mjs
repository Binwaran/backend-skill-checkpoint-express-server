import pool from "../utils/db.mjs";

export const insertQuestion = async (title, description, category) => {
  const result = await pool.query(
    "INSERT INTO questions (title, description, category) VALUES ($1, $2, $3) RETURNING *",
    [title, description, category]
  );
  return result.rows[0];
};
