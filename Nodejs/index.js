const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const { mongourl } = require('./keys');

const arr = [];
require('./models/User');
const authRoutes = require('./routes/authRoutes');
app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(mongourl);
mongoose.connection.on('connected', () => {
  console.log('Connected to mongoose');
});
mongoose.connection.on('error', (error) => {
  console.log('Error', error);
});

const GetData = async () => {
  const result = await fetch(
    'https://www.zohoapis.in/crm/v3/Leads?fields=Last_Name,Email',
    {
      headers: {
        Authorization:
          'Zoho-oauthtoken 1000.246514a4434086a7a8f48d22858fbde1.7f994a436b1f4772e96002791074f22f',
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      arr.push(json);
    });
};
GetData();
app.get('/', (req, res) => {
  console.log(req.body);
  // res.send('hello');
  res.send(arr);
});

app.listen(PORT, () => {
  console.log('server running ' + PORT);
});
