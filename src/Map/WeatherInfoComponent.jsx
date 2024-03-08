import React from 'react';

const WeatherInfoComponent = ({ weather }) => {
  if (!weather) {
    return <p>Loading...</p>;
  }

  // Provide a default value of 0 for rain if it's undefined, null, or any falsy value
  const rainValue = weather.rain || 0;

  return (
    <div className="weather-info">
      <h3>Weather Conditions:</h3>
      <p>Temperature: {weather.temp}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Clouds: {weather.clouds}%</p>
      <p>Rain: {rainValue}mm</p> {/* Use rainValue here */}
      <p>Description: {weather.weather}</p>
    </div>
  );
};

export default WeatherInfoComponent;
