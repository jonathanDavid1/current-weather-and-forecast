import React from 'react'

const Weather = ({weatherInfo}) => {
  return (
<section>
      <h2>{weatherInfo?.name}</h2>

      <section>
        {/* sección superior */}
        <section>
          <h4>{weatherInfo?.[0].description}</h4>
          <span>{weatherInfo?.main.temp}</span>
          <div>
            <img src='' alt='' />
          </div>
        </section>

        {/* sección inferior */}
        <section>
          <article>
            <div>
              <img src='' alt='' />
            </div>
            <span>wind</span>
          </article>

          <article>
            <div>
              <img src='' alt='' />
            </div>
            <span>Humidity</span>
          </article>

          <article>
            <div>
              <img src='' alt='' />
            </div>
            <span>pressure</span>
          </article>
        </section>
      </section>
    </section>
  )
}

export default Weather
