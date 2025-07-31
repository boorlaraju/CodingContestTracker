# 🏁 Coding Contest Tracker (Full Stack MERN Project)

A full stack web application to track upcoming and past programming contests from various platforms like Codeforces, LeetCode, AtCoder, etc. Users can register, log in, view contests with countdown timers, toggle email notifications, and manage their profiles.

---

## 🚀 Features

- 🔐 User Authentication (Register / Login / Logout with JWT)
- 🗓️ Upcoming & Past Contests List (with countdown timers)
- 📨 Notification Toggle (Enable/disable email alerts)
- 👤 Profile Page (Display user info from token)
- 📦 Backend API integration with external contest sources
- 🖥️ Responsive frontend using React + Material UI

---

## 🧱 Tech Stack

### Frontend:
- React
- Material UI (MUI)
- React Router
- Axios
- jwt-decode

### Backend:
- Node.js + Express.js
- MongoDB + Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- Node-cron (for scheduling notifications)

---

## 📁 Folder Structure

contest-tracker/
├── backend/
│ ├── controllers/ # Business logic for routes
│ ├── middleware/ # JWT auth middleware
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── utils/ # External API fetch, mail logic
│ ├── .env # Env variables
│ └── server.js # Entry point
│
├── frontend/
│ ├── public/ # Static files
│ ├── src/
│ │ ├── api.js # Axios instance
│ │ ├── App.js # Main app with routing
│ │ ├── index.js # ReactDOM renderer
│ │ ├── pages/ # Login, Register, Contests, Profile
│ │ └── components/ # Reusable components like ContestBox
│
├── README.md
└── package.json

y
