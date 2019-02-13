var app = require('express')();
var quote = require('./quote.json');

app.get('/all-quote', (req, res) => {
  res.json(quote);
})

.get('/quote/:id', (req, res) => {
  let id = req.params.id;
  let regExp = /\d/;
  if (regExp.test(id)) {
    if (id >= 0 && id < quote.length) {
      res.json(quote[id]);
    } else {
      res.json({"error": "Out of length"});
    }
  } else {
    res.json({"error": "Id should be a number"});
  }
})

.get('/random-quote', (req, res) => {
  let id = Math.floor(Math.random()*quote.length);
  res.json(quote[id]);
});

app.listen(8080);
