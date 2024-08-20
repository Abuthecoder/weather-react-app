import { useState } from "react"
import axios from "axios"
import { TiWeatherPartlySunny } from "react-icons/ti";
function Climate() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [temp, setTemp] = useState("")
    const [desc, setDesc] = useState("")
    function handlecity(evt) {
        setCity(evt.target.value)
    }
    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=592de087f2f13537e98e0f30158af5f4`)
        weatherData.then(function (success) {
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setTemp(success.data.main.temp)
            setDesc(success.data.weather[0].description)
        })
    }
    return (
        <>
            <div className="p-20 pt-56 flex justify-around">
                <div className="bg-white p-10 rounded-2xl">
                    <div className="flex items-center gap-5">
                        <h1 className="text-2xl font-medium">Weather Report</h1>
                        <TiWeatherPartlySunny style={{fontSize:"30px"}}/>
                    </div>
                    <p>I can give you a weather report about your city!</p>
                    <input type="text" placeholder="City name" className="mt-2 border border-black rounded-md py-3 p-3" onChange={handlecity}></input><br></br>
                    <button className="bg-black text-white p-2 rounded-md mt-2" onClick={getWeather}>Report</button>
                    <div className="mt-2">
                        <h1><b>Weather:</b>{weather}</h1>
                        <h1><b>Temperature:</b>{temp}</h1>
                        <h1><b>Description:</b>{desc}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Climate