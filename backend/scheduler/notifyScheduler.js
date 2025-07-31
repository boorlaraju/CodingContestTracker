import { sendEmail } from '../utils/emailService.js';
import User from '../models/User.js';
import axios from 'axios';

const scheduleNotifications = async () => {
  try {
    const res = await axios.get('https://clist.by:443/api/v2/contest/', {
      headers: {
        Authorization: `ApiKey ${process.env.CLIST_USERNAME}:${process.env.CLIST_API_KEY}`
      },
      params: {
        upcoming: 1,
        limit: 5
      }
    });

    const upcomingContests = res.data.objects;

    const users = await User.find({ notify: true });

    for (const user of users) {
      let message = '🕒 Upcoming Coding Contests:\n\n';

      upcomingContests.forEach(contest => {
        message += `📌 ${contest.event}\n⏰ Starts: ${contest.start}\n⏳ Duration: ${contest.duration}\n🔗 ${contest.href}\n\n`;
      });

      await sendEmail(user.email, 'Upcoming Coding Contests 🧠💻', message);
      console.log(`✅ Notification sent to ${user.email}`);
    }

  } catch (err) {
    console.error('❌ Error in notification scheduler:', err.message);
  }
};

export default scheduleNotifications;
