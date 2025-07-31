import mongoose from 'mongoose';

const contestSchema = new mongoose.Schema({
  name: String,
  platform: String,
  start: Date,
  end: Date,
  duration: Number,
  url: String
});

export default mongoose.model('Contest', contestSchema);

