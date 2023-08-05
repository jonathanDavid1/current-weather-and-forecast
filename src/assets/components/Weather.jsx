import React from 'react'

const Weather = ({weatherInfo}) => {
  return (
<section className='text-center'>
      <h2>{weatherInfo?.name}</h2>

      <section>
        {/* sección superior */}
        <section className='bg-white/60 p-2 rounded-2xl'>
          <h4>{weatherInfo?.weather[0].description}</h4>
          <span>{weatherInfo?.main.temp}°K</span>
          <div>
            <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`} alt='' />
          </div>
        </section>

        {/* sección inferior */}
        <section className='bg-white/60 p-2 rounded-2xl'>
          <article>
            <div>
              <img src='/images/wind.png' alt='' />
            </div>
            <span>{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article>
            <div>
              <img src='/images/humidity.png' alt='' />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
          </article>

          <article>
            <div>
              <img src='/images/pressure.png' alt='' />
            </div>
            <span>{weatherInfo?.main.pressure}hPa</span>
          </article>
        </section>
      </section>
    </section>
  )
}

export default Weather
