import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${name}`,
      replyTo: email,
      html: `
    <div style="font-family: Arial, sans-serif; line-height:1.6; padding:20px;">
      
      <h2 style="color:#2563eb;">New Contact Message</h2>
      
      <p>You have received a new message from your portfolio:</p>
      
      <hr style="margin: 20px 0;" />
      
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      
      <p><strong>Message:</strong></p>
      <p style="background:#f3f4f6; padding:10px; border-radius:5px;">
        ${message}
      </p>

      <hr style="margin: 20px 0;" />

      <p style="font-size:12px; color:gray;">
        This message was sent from your portfolio contact form.
      </p>
    </div>
  `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
