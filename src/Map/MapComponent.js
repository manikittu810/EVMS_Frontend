import React, { useState, useEffect } from 'react';
import WeatherInfoComponent from './WeatherInfoComponent';
import LocationMapComponent from './LocationMapComponent';
import '../App.css';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        fetchWeatherData(latitude, longitude);
      }, error => {
        console.error("Error obtaining location:", error);
      });
    };
 
    const username = 'user';
    const password = 'smk123';
    const headers = new Headers({
      'Authorization': 'Basic ' + btoa(username + ":" + password)
    });

    const fetchWeatherData = (latitude, longitude) => {
      const url = `http://localhost:1234/api/weather?lat=${latitude}&lon=${longitude}`;
    
      // Include the headers in the fetch call
      fetch(url, { method: 'GET', headers: headers })
        .then(response => {
          if (!response.ok) {
            // If the server response is not OK, throw an error
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // Parse JSON response
        })
        .then(data => {
          const { weather, clouds, temp, humidity, rain, description } = data;
    
          setWeather({
            weather,
            clouds,
            temp,
            humidity,
            rain,
            description,
          });
        })
        .catch(error => {
          console.error("Error fetching weather from backend: ", error);
          // Handle error here
        });
    };
    
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className="marquee">
        <h1>Welcome Farmer !!</h1>
      </div>
      <div className="location-info">
        <h4>Location : </h4>
        <span>{location.latitude && location.longitude ? `${location.latitude}, ${location.longitude}` : "Loading..."}</span>
      </div>
      <div className="weather-section">
        <WeatherInfoComponent weather={weather} />
      </div>
      <div className="map-container">
        <LocationMapComponent location={location} />
      </div>
    </div>
  );

};

export default MapComponent;