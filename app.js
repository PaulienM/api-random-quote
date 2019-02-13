const express = require('express');
const app = express();
const quote = require('./quote.json');

app.set('port', process.env.PORT || 5000)

.use(express.static(__dirname + "/public"))

.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

.get('/all-quotes', (req, res) => {
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

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
