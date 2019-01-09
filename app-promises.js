const yargs = require('yargs');
const axios = require("axios");
const config = require * ("./config");
const argv = yargs.options({
  a: {
    demand: true,
    alias: "address",
    describe: "The address to get the weather for",
    string: true
  }
}).help().alias("help", "h").argv;
var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${config.apiKey}`;
axios.get(geocodeUrl)..then((response) => {
  if (response.data.status === "ZERO_RESULTS") {
    throw new Error("I can't throw this error as far as the moon, for that appears to be where you are. Not anywhere on this planet at least, that's for sure");
  }
  console.log(response.data);

}).catch((err) => {
  if (err.code === "ENOTFOUND") {
    console.log("I solemnly promise Google absolutely hates you. Just what did you do to piss the big G off so much?");

  } else {
    console.log(`Now you've done it. You've broken the app in a new exciting way, thanks a lot Colonel Crashalot. Maybe this will help: ${err.message}`);

  }
});
// yadda yadda, I get the point