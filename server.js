
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('./dist/restauracja'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/restauracja/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);