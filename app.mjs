import express from "express";
import connectionPool from "./utils/db.mjs";
import questionRoutes from "./routes/questionRoutes.mjs";


const app = express();
const port = 4000;

connectionPool.query("select now()")
  .then(()=> console.log("Database connected"))
  .catch((err) => console.error("Database connection error", err));

app.use(express.json());

app.use("/questions", questionRoutes);

app.get("/test", (req, res) => {
  return res.json("Server API is working 🚀");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
