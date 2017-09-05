const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'production') {
  //Serve production assets when in production!
  app.use(express.static('client/build'));
  //Serve the index.html file if Express doesn't recognize the route.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
