const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure the Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "beatbazaarai@gmail.com", // Replace with your Gmail
        pass: "your-app-password",   // Replace with your App Password
      },
    });

    // Configure the email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's name and email
      to: "your-email@gmail.com",   // Replace with your Gmail
      subject: "New Contact Form Submission",
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Failed to send email" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});