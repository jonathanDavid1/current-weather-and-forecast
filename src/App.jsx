import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './assets/components/Weather';

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    const API_KEY = "91f5efab15752b1ca9cea3aa8f629444"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    
    axios.get(url)
    .then(({data}) => setWeatherInfo(data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className='bg-[#2f2958] min-h-screen text-white font-lato flex justify-center items-center px-4'>
      <Weather weatherInfo={weatherInfo}/>
    </main>
  )
}

export default App