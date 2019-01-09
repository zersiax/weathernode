const request = require("request");
const config = require("./config");

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${config.darkSkyKey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("The dark skies have smote you down with lightning and lethal radiation. Serves you right for complaining about the weather all day");
    } else if (response.statusCode === 400) {
      callback("This is a bad, a bad request!");
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;