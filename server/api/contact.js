import nodemailer from "nodemailer";
import twilio from "twilio";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { firstName, lastName, phone, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "webdevloper0710@gmail.com",
    subject: "New Contact Form Submission - Saini Lifters",
    html: `
      <h3>New message from ${firstName} ${lastName}</h3>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  let emailStatus = true;
  let whatsappUserStatus = true;
  let whatsappAdminStatus = true;

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    emailStatus = false;
  }

  const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP,
      to: `whatsapp:+91${phone}`,
      body: `Hello ${firstName}, your message has been received by Saini Lifters. We'll get back to you soon!`,
    });
  } catch (error) {
    whatsappUserStatus = false;
  }

  try {
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP,
      to: process.env.ADMIN_PHONE,
      body: `New enquiry:\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    });
  } catch (error) {
    whatsappAdminStatus = false;
  }

  return {
    success: emailStatus,
    emailSent: emailStatus,
    whatsappToUser: whatsappUserStatus,
    whatsappToAdmin: whatsappAdminStatus,
  };
});
