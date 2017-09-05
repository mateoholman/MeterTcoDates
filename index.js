const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  //Serve production assets when in production!
  app.use(express.static('client/build'));
  //Serve the index.html file if Express doesn't recognize the route.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.all('*', (req, res, next) => {
  req.status = 401;
  return res.json(`Not found. Couldn't find it. It's not here!`);
});

app.use((err, req, res, next) => {
  res.status = 500;
  return res.json(`Unable to process request. ERROR: ${err}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
