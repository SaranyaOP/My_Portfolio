import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());

app.use(
  cors({
    origin: "https://saranyaop-portfolio.vercel.app",
    methods: ["GET", "POST"],
  })
);

// ✅ Health check route (IMPORTANT for testing)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ✅ Nodemailer transporter (FIXED)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify SMTP connection (CRITICAL DEBUG)
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP ERROR:", error);
  } else {
    console.log("✅ SMTP READY");
  }
});

// ✅ Send Email API
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🚀 Portfolio Message from ${name}`,
      replyTo: email,

      html: `
        <div style="font-family: Arial; padding:20px;">
          <h2 style="color:#2563eb;">New Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>
          <p style="background:#f3f4f6; padding:10px;">
            ${message}
          </p>
        </div>
      `,

      connectionTimeout: 10000, // ⏱ prevent hanging
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("❌ Email send error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Email failed",
    });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});