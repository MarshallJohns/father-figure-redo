import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './home.css'

export default function Home(props) {
    const [weather, setWeather] = useState({})
    const [zipcode, setZipcode] = useState('')
    const [joke, setJoke] = useState({})
    const [weatherDisplay, setWeatherDisplay] = useState(false)

    const handleWeather = () => {
        setWeatherDisplay(false)
        axios.get(`/api/weather/current/${zipcode}`).then(res => {
            setWeather(res.data)
            setZipcode('')
            setWeatherDisplay(true)
        }).catch(err => alert(err.response.request.response))
    }

    console.log(weather)
    return (
        <div>
            <div>
                <input type='text' placeholder='Zipcode' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                <button onClick={() => handleWeather()}>Submit!</button>
            </div>

            <div className={!weatherDisplay ? 'noDisplay' : 'display'}>
                <p>City:{weather.name}</p>
                <p>{weather.condition}</p>
                <p>{weather.temperature}</p>
                <img src={weather.icon} />
            </div>
        </div>
    )
}