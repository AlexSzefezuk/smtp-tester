require('dotenv').config()
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true' ? true : false, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const main = async () => {
  const info = await transporter.sendMail({
    from: `SMTP Tester <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    subject: "Testing SMTP Credentials",
    text: "Hello world?",
    html: "<b>Hello world</b>",
  });

  console.log("Message sent: %s", info.messageId);
}
main().catch(console.error);
