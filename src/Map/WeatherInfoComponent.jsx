import React from 'react';

const WeatherInfoComponent = ({ weather }) => {
  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <div className="weather-info">
      <h3>Weather Conditions:</h3>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Rain: {weather.rain}mm</p>
      <p>Description: {weather.description}</p>
    </div>
  );
};

export default WeatherInfoComponent;