const yargs = require('yargs');
const geocode = require("./geocode");
const weather = require("./weather");
const argv = yargs.options({
  a: {
    demand: true,
    alias: "address",
    describe: "The address to get the weather for",
    string: true
  }
}).help().alias("help", "h").argv;

geocode.geocodeAddress(argv.address, (message, result) => {
  if (message) {
    console.log(message);
  } else {
    console.log(result.address);
    weather.getWeather(result.latitude, result.longitude, (message, weatherResult) => {
      if (message) {
        console.log(message);
      } else {
        console.log(`It's currently ${weatherResult.temperature}. It feels more like ${weatherResult.apparentTemperature}, though!`);

      }
    });
  }
});