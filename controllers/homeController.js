module.exports = function(app, player) { 

  app.get('/', function(request, response) {
    response.render('pages/index');
  });

  app.get('/:id', function(req, res) {
    console.log(req.params.id);

  });

  app.post('/', function(req, res) {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    res.end('register success');
  });
}