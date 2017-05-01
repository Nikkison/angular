var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/album', function(req, res) {
  var ALBUMS = {
    data: [
        {id: 0, name: '時空の水'},
        {id: 1, name: 'Aurora'},
    ]
  };
  res.contentType('text/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.send(ALBUMS);
});

app.get('/api/music', function(req, res) {
  var MUSICS = {
    data: [
      {id: 0, albumId: 0, name: '金星'},
      {id: 1, albumId: 1, name: '広場で'},
    ]
  }
  res.contentType('text/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.send(MUSICS);
});

app.listen(4201);
console.log('Listening on port 4201...');
