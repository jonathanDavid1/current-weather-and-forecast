import React from 'react'

const SearchCity = ({ weatherInfo }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const city = event.target.city.value
        console.log(city)
      }

  return (
    <form className='mb-3' onSubmit={handleSubmit}>
      <input
        id="city"
        type="text"
        placeholder="Search a city"
        className="text-black p-2"
      />
      <button>Search</button>
    </form>
  );
}

export default SearchCity
