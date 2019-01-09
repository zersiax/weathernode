const request = require('request');
const config = require('./config')
var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURI(address);
  request({

    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${config.apiKey}`,
    json: true

  }, (error, response, body) => {
    if (error) {
      callback("Google doesn't like us. We don't know why, either");
    } else if (body.status === "ZERO_RESULTS") {
      callback("Uhm ...it seems you're not on planet Earth. Google doesn't do the moon yet");

    } else if (body.status === "OK") {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }

  });
};
module.exports.geocodeAddress = geocodeAddress;