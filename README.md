# 🧠 Question API – Express.js Backend

A modular REST API built with Express.js to manage a collection of questions.  
This backend service is designed with clean architecture using controllers, routes, and middleware.

---

## 🚀 Features

- ✅ Get all questions  
- 🆕 Add a new question  
- ❌ Delete question by ID  
- 🔄 Modular structure with controller separation  
- 🛡️ Middleware for request logging and error handling  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL (via pg)  
- **Language:** JavaScript (ES Modules)  
- **Dev Tools:** Nodemon, Postman  

---

## 📂 Folder Structure
📦 BACKEND-SKILL-CHECKPOINT-EXPRESS-SERVER
┣ 📁 controllers # Request logic for each route
┣ 📁 middlewares # Custom middleware (e.g., logging)
┣ 📁 models # Database queries / schema
┣ 📁 routes # All route definitions
┣ 📁 utils # Utility functions
┣ 📄 app.mjs # App entry point
┣ 📄 db.mjs # PostgreSQL connection
┣ 📄 package.json # Scripts and dependencies

## 📦 Installation & Running Locally

1. **Clone the repo**
  git clone https://github.com/Binwaran/your-backend-repo.git
  cd BACKEND-SKILL-CHECKPOINT-EXPRESS-SERVER
   
2. Install dependencies
   npm install
   
3. Run the server
   npm start
   
4. API available at
   http://localhost:4000/api/questions


🧪 Sample Endpoints (Test via Postman)
Method	Endpoint	Description
GET	/api/questions	Get all questions
POST	/api/questions	Add a new question
DELETE	/api/questions/:id	Delete by ID

Sample payload for POST:
{
  "question": "What is Express?",
  "choices": ["Framework", "Language", "Database"],
  "answer": "Framework"
}

👩‍💻 Developer
Binwaran Milinthajinda
Full Stack Developer | Node.js Enthusiast


License
This project is licensed under the MIT License



