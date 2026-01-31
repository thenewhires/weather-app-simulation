import React, { useState } from 'react';

function Header({ onCityChange }) {
  const [newCity, setNewCity] = useState('');

  const handleChange = (event) => {
    setNewCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // BUG 6: This calls the function with the current state, AFTER the component is
    // rendered.  This means the UI will update, but the logic here will use the OLD
    // value of newCity.
    onCityChange(newCity);
    // setNewCity(''); // Clear the input after submitting

    // FIX:
    // const cityToUpdate = newCity;
    // setNewCity('');
    // onCityChange(cityToUpdate);
  };

  return (
    <header>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={newCity}
          onChange={handleChange}
        />
         {/* BUG 7: Forgot to include submit button. The on submit event wont work */}
         {/* FIX: <button type="submit">Get Weather</button>  */}    
      </form>
    </header>
  );
}

export default Header;