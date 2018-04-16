var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var player = require('play-sound')(opts = {})

app.set('port', (process.env.PORT || 80));

app.use('/css', express.static('./css'));
app.use('/images', express.static('./images'));
app.use('/js', express.static('./js'));
app.use('/sound', express.static('./sound'));

app.set('view engine', 'ejs');

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// Process application/json
app.use(bodyParser.json())

var homeController = require('./controllers/homeController');

homeController(app, player);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
