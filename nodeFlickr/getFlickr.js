const express = require('express');
const request = require('request');
var xml = require('xml'); //To handle xml output
var parser = require('xml2js'); //To parse xml to json


const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //allow CORS to all URLs
  next();
});

app.get('/getFlickrData', (req, res) => {
  request(
    { url: 'https://api.flickr.com/services/feeds/photos_public.gne' }, //FlickrAPI call
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message }); //Handling error response
      }
	parser.parseString(xml, function (err, result) {
  
});
var result;
parser.Parser().parseString(body, (e, r) => {result = r});  //Parse XML to JSON
res.json(result);
}
  )
});



const PORT = process.env.PORT || 8080; //Application is running on port 8080
app.listen(PORT);