var express = require('express');
var app = express();

// for serving public folder
app.use(express.static(__dirname + '/public'));

// choose a port
app.listen(process.env.PORT || 8000);

console.log('Server is now running');
