const yargs = require('yargs');
const geocode = require("./geocode");
const argv = yargs.options({
  a: {
    demand: true,
    alias: "address",
    describe: "The address to get the weather for",
    string: true
  }
}).help().alias("help", "h").argv;

geocode.geocodeAddress(argv.address);