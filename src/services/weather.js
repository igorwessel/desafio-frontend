const OAuth = require("oauth");

let header = {
  "X-Yahoo-App-Id": process.env.REACT_APP_YAHOO_APP_ID,
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
  "1.0",
  null,
  "HMAC-SHA1",
  null,
  header
);

export const getCityForecastrss = (city) => {
  return request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city}&format=json`,
    null,
    null,
    (err, data, result) => {
      if (err) console.error(err);
      data = JSON.parse(data);

      console.log(data);
      return data;
    }
  );
};
