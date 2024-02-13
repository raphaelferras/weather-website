const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=03fee47f556c9c0282b17e930cd2c9e8&query=' + long + ',' + lat
    console.log(url);
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            const c = body.current
            const data = {
                description: c.weather_descriptions[0],
                temperature: c.temperature,
                feelslike: c.feelslike,
            }
            callback(undefined, data)
        }
    })
}


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('')
//     } else if (response.body.error) {
//         console.log('unable to find location')
//     } else {
//         const c = response.body.current
//         console.log(c.weather_descriptions[0] + '. Is is currently ' + c.temperature + '. It feels like ' + c.feelslike + ' degress out.');
//     }
// })

module.exports = forecast