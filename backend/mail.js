const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vallarasusaravanakumar@gmail.com',
    pass: 'zdst gald crmx zmjw', // App password (not real password)
  },
});

app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Admin email options
  const adminMailOptions = {
    from: 'vallarasusaravanakumar@gmail.com',
    to: 'vallarasusaravanakumar@gmail.com',
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  // Send email to admin
  transporter.sendMail(adminMailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to send message to admin.' });
    }

    // Send success response to frontend
    return res.status(200).json({ message: 'Form submitted and email sent to admin.' });
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
