const request = require('request');

const forecast = (lat, lon, callback) => {
  const url = `https://api.darksky.net/forecast/35f337b31c2d6403b72f4f710517d692/${lat},${lon}?units=si`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      const currently = body.currently;
      const today = body.daily.data[0];
      callback(
        undefined,
        `${today.summary} It is currently ${
          currently.temperature
        } degrees. The high for today is ${
          today.temperatureHigh
        } degrees and a low of ${today.temperatureLow} degrees. There is a ${
          currently.precipProbability
        }% chance or rain.`
      );
    }
  });
};

module.exports = forecast;
