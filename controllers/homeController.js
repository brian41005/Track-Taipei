module.exports = function (app, player) {
  app.get('/about', function (req, res) {
    res.render('pages/about');
  });

  //app.get('/entry', function(req, res) {
  //  res.render('pages/entry');
  //});

  app.get('/', function (req, res) {
    res.render('pages/run');
  });
}