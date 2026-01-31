import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // BUG 3: The apiUrl is missing the correct backend port.  It should be 8080.
  const apiUrl = `http://localhost:3001/weather?city=${city}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (e) {
        setError(e.message);
        setWeatherData(null);
      }
    };

    fetchData();
  }, [city]);

  const handleCityChange = (newCity) => {
      // BUG 4: React state updates are asynchronous. This code will NOT update the city immediately.
      // Using the previous value of the state is unsafe.  It needs to be updated correctly using
      // the function version of setState
      setCity(city);

      // The fix would be:
      // setCity((prevCity) => newCity);
  };

  return (
    <div className="App">
      <Header onCityChange={handleCityChange} />
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div>
          <h2>Weather in {city}</h2>
          {/* BUG 5: Accessing deeply nested property without checking if it exists.
              If "main" or "temp" does not exist, this will throw an error */}
          <p>Temperature: {weatherData.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default App;