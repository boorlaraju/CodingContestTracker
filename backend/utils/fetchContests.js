import axios from 'axios';
import dotenv from 'dotenv';
import Contest from '../models/Contest.js'; // Make sure this model exists

dotenv.config();

export async function fetchAndStoreContests() {
  const username = process.env.CLIST_USERNAME;
  const apiKey = process.env.CLIST_API_KEY;

  const now = new Date();
  const startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(); // 7 days ago
  const endDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString(); // 14 days ahead

  try {
    const res = await axios.get(
      `https://clist.by/api/v2/contest/?start__gt=${startDate}&start__lt=${endDate}&order_by=start`,
      {
        headers: {
          Authorization: `ApiKey ${username}:${apiKey}`,
        },
      }
    );

    const contests = res.data.objects.map((contest) => ({
      name: contest.event,
      platform: contest.resource.name,
      start: contest.start,
      end: contest.end,
      duration: contest.duration,
      url: contest.href,
    }));

    await Contest.deleteMany({}); // Optional: clear old
    await Contest.insertMany(contests);

    console.log('✅ Contests fetched and saved.');
  } catch (error) {
    console.error('❌ Error fetching contests:', error.message);
  }
}
