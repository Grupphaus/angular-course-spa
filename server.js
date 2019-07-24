const path = require('path');
const express = require('express');
const compression = require('compression');
const app = express();

app.use(compression());

// Serve static files
app.use(express.static(__dirname + '/dist/got-houses'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/got-houses/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
