import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Already registered' });

  const user = new User({ email });
  await user.save();
  res.status(201).json({ message: 'Registered' });
});

router.post('/notifications', async (req, res) => {
  const { email, enabled } = req.body;
  await User.updateOne({ email }, { notifications: enabled });
  res.status(200).json({ message: 'Updated' });
});

export default router;
