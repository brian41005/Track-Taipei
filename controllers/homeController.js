module.exports = function(app, player) { 
  var model = require('../model/mdoel');

  app.get('/test', function(req, res) {
    res.render('pages/header');
  });

  app.post('/data', function(req, res) {
    const { key } = req.body;
    data = model.dataArray[key];
    res.json(data);
  });

  app.get('/about', function(req, res) {
    res.render('pages/about');
  });

  app.get('/entry', function(req, res) {
    res.render('pages/entry');
  });

  app.get('/run', function(req, res) {
    res.render('pages/run');
  });

  app.get('/:id', function(req, res) {
    var index = req.params.id;
    data = model.dataArray[index];
    res.render('pages/index', { data: data });
  });
}