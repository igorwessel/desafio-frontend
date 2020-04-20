const OAuth = require('oauth');
const moment = require('moment');

let header = {
  'X-Yahoo-App-Id': process.env.REACT_APP_YAHOO_APP_ID,
};

let config = {
  client_id: process.env.REACT_APP_YAHOO_CLIENT_ID,
  client_secret: process.env.REACT_APP_YAHOO_CLIENT_SECRET,
};

let request = new OAuth.OAuth(
  null,
  null,
  config.client_id,
  config.client_secret,
  '1.0',
  null,
  'HMAC-SHA1',
  null,
  header,
);

export const getCityForecast = (city) =>
  new Promise((resolve, reject) => {
    request.get(
      `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city}&format=json&u=c`,
      null,
      null,
      (err, data) => {
        if (err) reject(err);

        data = JSON.parse(data);

        console.log(data);

        resolve(data);
      },
    );
  });

export const getCapitals = () =>
  new Promise((resolve, reject) => {
    const cities = [
      'Rio de Janeiro',
      'São Paulo',
      'Belo Horizonte',
      'Brasilia',
      'Belem',
      'Salvador',
      'Curitiba',
      'Fortaleza',
      'Manaus',
      'Joao Pessoa',
    ];

    const cities_forecast = [];
    let counter = 0;
    for (let city of cities) {
      request.get(
        `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city}&format=json&u=c`,
        null,
        null,
        // eslint-disable-next-line no-loop-func
        (err, data) => {
          if (err) reject(err);

          data = JSON.parse(data);

          data.forecasts
            .filter((forecast) => {
              return (
                moment().format('YYYYMMDD') ===
                moment.unix(forecast.date).format('YYYYMMDD')
              );
            })
            .forEach((date) => {
              return cities_forecast.push({
                city: data.location.city,
                low: date.low,
                high: date.high,
              });
            });

          counter++;
          if (counter === cities.length) {
            resolve([cities_forecast.splice(0, 5), cities_forecast]);
          }
        },
      );
    }
  });
