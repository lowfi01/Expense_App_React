const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // define port to work with heroku

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  // Allow url paths to resolve correctly
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, (error)=> {
  if (error) console.log('error', error);
  else console.log(`Server live on ${port}`);
})