const nodemailer = require('nodemailer');
async function sendEmail(to, subject, html) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'premium289.web-hosting.com',
      port: 465,
      secure: true,
      auth: {
        user: 'noreply@bfuture.network',
        pass: 'IpprR7}t[A1.',
      },
    });

    const mailOptions = {
      from: ' "Bfuture Network" noreply@bfuture.network',
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return info;
  } catch (error) {
    return error;
  }
}

module.exports = sendEmail;
