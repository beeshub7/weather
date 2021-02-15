const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=45fce6c3296c1b9a8e05e79e5ead73d5&query=' + latitude + ',' + longitude /*+ '&units=f'*/;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(null, `${body.current.weather_descriptions[0]} It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`);
        }
    });
};

module.exports = forecast;