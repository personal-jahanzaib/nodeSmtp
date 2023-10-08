const express = require('express');
const app = express();
const sendEmail = require('./sendmail');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  let { to, subject, html } = req.body;
  try {
    const response = await sendEmail(to, subject, html);
    const { messageId } = response;
    if (messageId == '' && messageId == null) {
      res.json({
        status: 400,
        message: 'faild',
      });
    } else {
      res.json({
        status: 200,
        message: 'sent',
      });
    }
  } catch (error) {
    res.json({
      status: 500,
      message: 'internal server error',
    });
  }
});

app.listen(() => {});
