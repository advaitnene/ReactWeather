var express = require('express');

//Create our app
var app = express();

// Use of environment variable to provide dynamic port number.
const PORT = process.env.PORT || 3000;

//openweathermap api only supports http traffic. To redirect https traffic, the following function is used.
app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
