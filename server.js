'use strict'

const express = require('express');
const app = express();

app.use(express.static('./'));
app.use(express.static('dist'));

require('./server/middleware')(app);

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
