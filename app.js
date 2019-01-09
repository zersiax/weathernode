const request = require('request');
const config = require('./config.js')
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=willemsplein%2031%20arnhem&key=${config.apiKey}`,
  json: true

}, (error, response, body) => {
  console.log(body);
});