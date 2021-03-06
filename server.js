const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

const config = {
  credentials: true
}

app.use(cors(config));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server started on a port ${port}`));
