import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import contestRoutes from './routes/contestRoutes.js';
import scheduleNotifications from './scheduler/notifyScheduler.js';
import authRoutes from './routes/authRoutes.js';
import { fetchAndStoreContests } from './utils/fetchContests.js';
//import scheduleNotifications from './scheduler/notifyScheduler.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contests', contestRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => console.log("Server running"));
    fetchAndStoreContests(); // ⬅️ fetch contests on startup
   
    scheduleNotifications();
  })
  .catch(err => console.log(err));
