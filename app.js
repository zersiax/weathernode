const request = require('request');
const config = require('./config.js')
const yargs = require('yargs');
const argv = yargs.options({
  a: {
    demand: true,
    alias: "address",
    describe: "The address to get the weather for",
    string: true
  }
}).help().alias("help", "h").argv;
var encodedAddress = encodeURI(argv.address);
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${config.apiKey}`,
  json: true

}, (error, response, body) => {
  if (error) {
    console.log("Google doesn't like us. We don't know why, either");
  } else if (body.status === "ZERO_RESULTS") {
    console.log("Uhm ...it seems you're not on planet Earth. Google doesn't do the moon yet");

  } else if (body.status === "OK") {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }

});