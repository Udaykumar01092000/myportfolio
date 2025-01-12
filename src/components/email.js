const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json()); // to parse the body of the request
app.use(cors()); // to handle cross-origin requests from React

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'udaykumar.77348@gmail.com', // Your Gmail address
    pass: 'uday@7286877348',  // Your Gmail app-specific password (not regular password)
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'udaykumar.77348@gmail.com',  // Your email where you want to receive messages
    subject: `Message from ${name} - ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
