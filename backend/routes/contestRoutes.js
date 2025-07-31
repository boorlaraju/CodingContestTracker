import express from 'express';
import Contest from '../models/Contest.js';

const router = express.Router();

router.get('/upcoming', async (req, res) => {
  const now = new Date();
  const contests = await Contest.find({ start: { $gt: now } }).sort({ start: 1 });
  res.json(contests);
});

router.get('/past', async (req, res) => {
  const now = new Date();
  const contests = await Contest.find({ start: { $lt: now } }).sort({ start: -1 });
  res.json(contests);
});

export default router;
