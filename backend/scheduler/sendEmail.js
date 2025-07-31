import nodemailer from 'nodemailer';

export default async function sendEmail(to, contest) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject: `Upcoming Contest: ${contest.name}`,
    html: `
      <h3>${contest.platform}</h3>
      <p><strong>${contest.name}</strong></p>
      <p>Start: ${new Date(contest.start).toLocaleString()}</p>
      <p>Duration: ${(contest.duration / 3600).toFixed(2)} hours</p>
      <a href="${contest.url}">Join Now</a>
    `
  };

  await transporter.sendMail(mailOptions);
}
