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


---

## 🧪 Clist.by API Integration

This project fetches programming contest data using the [Clist.by API](https://clist.by):

- Platforms like Codeforces, LeetCode, AtCoder, etc.  
- API is called via backend utility (e.g., `fetchContests.js`)
- Scheduled fetch using `node-cron` to get fresh contests every few hours
- Use your Clist API credentials (`CLIST_USERNAME` and `CLIST_API_KEY`) in `.env`

---

## 🔐 Environment Variables

Create a `.env` file inside `/backend`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/contest-tracker
JWT_SECRET=your_secret
CLIST_USERNAME=your_clist_username
CLIST_API_KEY=your_clist_api_key



