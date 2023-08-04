import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [weatherInfo, setweatherInfo] = useState(initialState);
  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "91f5efab15752b1ca9cea3aa8f629444"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API_KEY}`
    
    axios.get(url)
    .then(({data}) => setWeatherInfo(data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success))
  }, [])

  return (
    <main className='bg-black min-h-screen text-white font-lato'>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eum dolor ipsum explicabo doloremque assumenda tempora porro ut commodi officia repellat accusamus saepe voluptatum consequatur, quos soluta aspernatur laborum vitae!</h2>
    </main>
  )
}

export default App