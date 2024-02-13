const request = require('request')

const geocode = (address, callback) => {
    console.log(address)
    const geocodeURL = 'http://ip-api.com/json/24.48.0.1'
    request({ url: geocodeURL, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            const latitude = body.lat
            const longtude = body.lon
            const data = {
                longitude: longtude,
                latitude: latitude,
                location: body.country,
            }
            callback(undefined, data)
        }

    })
}

module.exports = geocode