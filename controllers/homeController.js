module.exports = function(app, player) { 
  var model = require('../model/mdoel');

  app.post('/data', function(req, res) {
    const { key } = req.body;
    data = model.dataArray[key];
    res.json(data);
  });

  app.get('/about', function(req, res) {
    res.render('pages/about');
  });

  app.get('/', function(req, res) {
    res.render('pages/entry');
  });

  app.get('/run', function(req, res) {
    res.render('pages/run');
  });

}
