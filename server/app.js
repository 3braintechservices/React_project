const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/getdata', (req, res) => {
  var options = {
    url: 'https://books.zoho.com/api/v3/contacts?organization_id=649249007',
    headers: {
      Authorization: 'Zoho-authtoken db36e02a50b57e081efe533a8a0f834b',
    },
  };
  function callback(error, response, body) {
    res.send(JSON.parse(response.body));
  }
  request(options, callback);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
