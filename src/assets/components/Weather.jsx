import React, { useState } from 'react'

const Weather = ({weatherInfo}) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin -273.15).toFixed(1)
  }
  const kelvinToFahrenheit = (tempKelvin) => {
    return (((tempKelvin -273.15)*9/5) +32).toFixed(1)
  }
  const handleChangeUnitTemp = () => {
     setIsCelsius(!isCelsius)
  }
  const resultTempConvertion = isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)

  console.log(weatherInfo?.weather[0])
  

  return (
<section className='text-center'>
      <h2 className='mb-10 text-3xl'>{weatherInfo?.name}</h2>

      <section className='grid gap-4 sm:grid-cols-[auto_auto]'>
        {/* sección superior */}
        <section className='bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center'>

          <h4 className='col-span-2 mt-5 text-xl'>{weatherInfo?.weather[0].description}</h4>
          <span className='text-5xl'>{resultTempConvertion}°{isCelsius ? "C": "F"}</span>
          <div>
            <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt='' />
          </div>
        </section>

        {/* sección inferior */}
        <section className='bg-white/60 p-2 py-4  rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1'>
          <article className='flex gap-2 items-center'>
            <div className='w-[18px]'>
              <img src='/images/wind.png' alt='' />
            </div>
            <span>{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article className='flex gap-2 items-center'>
            <div className='w-[18px]'>
              <img src='/images/humidity.png' alt='' />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
          </article>

          <article className='flex gap-2 items-center'>
            <div className='w-[18px]'>
              <img src='/images/pressure.png' alt='' />
            </div>
            <span>{weatherInfo?.main.pressure}hPa</span>
          </article>
        </section>
      </section>
      <button onClick={handleChangeUnitTemp} className='mt-4 bg-white rounded-full text-blue-500 px-5 py-1'>{isCelsius ? "Cambiar a F°": "Cambiar a C°"}</button>
    </section>
  )
}

export default Weather
