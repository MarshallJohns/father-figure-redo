const axios = require('axios')
require('dotenv').config()
const { WEATHER_API_KEY } = process.env
module.exports = {
    getCurrentWeather: async (req, res) => {
        const { zipcode } = req.params
        console.log('hit')
        let data = {}
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},&appid=${WEATHER_API_KEY}`).then(res => {
            const { weather, main, name } = res.data
            data = {
                name: name,
                condition: weather[0].description,
                temperature: main.temp,
                icon: `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`,

            }
        }).catch(err => {
            res.status(404).send('Oops, please enter valid zipcode')
        })
        res.status(200).send(data)
    }

}