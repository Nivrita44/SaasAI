# SaasAI
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

# 🤖 Altera.ai – AI SaaS Application

Altera.ai is a **full-stack AI SaaS platform** that provides users with AI-powered tools for content creation, image editing, and resume analysis. Users can generate articles, blog titles, images, remove backgrounds, and analyze resumes with ease.  

---

## 🚀 Features

### 👤 User Module
- Secure sign-up, sign-in, and profile management using Clerk  
- Subscription-based premium feature access  
- Personalized dashboard for AI tools  
- Upload files/images for AI processing  

### 🤖 AI Tools
- **Article Generator** – Generate articles by title & length  
- **Blog Title Generator** – Generate blog titles using keyword & category  
- **Image Generator** – Create images from prompts  
- **Background Remover** – Upload image and remove background  
- **Object Remover** – Remove specific objects from images  
- **Resume Analyzer** – Upload resume for detailed analysis  

### 🌐 Public Features
- Landing pages: Home, About, Features, Pricing  
- Free vs Premium feature showcase  

---

## 🧑‍💻 Tech Stack

| Layer         | Technology                         |
|---------------|------------------------------------|
| Frontend      | React + Tailwind CSS               |
| Backend       | Node.js + Express.js               |
| Database      | PostgreSQL (Neon)                  |
| File Uploads  | Multer + Cloudinary                |
| Auth & Billing | Clerk + Subscription Management   |
| AI Integration | OpenAI API                        |

---

## 🗃️ Project Structure

altera.ai/
├── client/                 # Frontend (React + Tailwind)
│   ├── components/         # UI components
│   ├── pages/              # React pages/routes
│   ├── context/            # App-level context
│   └── main.jsx            # Entry point
├── server/                 # Backend (Node.js + Express)
│   ├── config/             # DB & Cloudinary config
│   ├── routes/             # API routes
│   ├── controllers/        # Controller logic
│   └── server.js           # Express server
├── README.md               # Project documentation
└── package.json


# Backend Setup
cd server
npm install
npm run dev

# Create a .env file in the server folder with the following content
# (replace values with your own)
PORT=8000
DATABASE_URL=your_postgres_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key

# Frontend Setup
cd ../client
npm install
npm run dev

# Access the app
# Frontend: http://localhost:5173
# Backend: http://localhost:8000

🌐 Live Demo

🔗 Live: https://saas-ai-beryl.vercel.app/

## 📌 Future Improvements
- Add analytics dashboard for users
- Enhance AI capabilities with more models
- Improve subscription & billing UX
- Optimize for mobile and desktop performance

## 🤝 Contributor
- Nivrita Munib

## 🪪 License
Altera.ai © 2025 [Nivrita / Altera.ai]

