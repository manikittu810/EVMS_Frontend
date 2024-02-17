// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const MapComponent = () => {
//   const [location, setLocation] = useState({ latitude: null, longitude: null });
//   const [weather, setWeather] = useState(null);

//   const getCurrentLocation = () => {
//     navigator.geolocation.getCurrentPosition(position => {
//       const { latitude, longitude } = position.coords;
//       setLocation({ latitude, longitude });
//       fetchWeatherData(latitude, longitude);
//     }, error => {
//       console.error("Error obtaining location:", error);
//     });
//   };

//   const fetchWeatherData = (latitude, longitude) => {
//     const apiKey = 'c9b63b8eb345f5756610d005b006e6c4'; // Replace this with your actual API key
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`; // Using metric units for temperature in Celsius
  
//     fetch(apiUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch weather data');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Assuming you want to display the temperature and humidity
//         // You might need to adjust the access paths based on the API response structure
//         setWeather({
//           temperature: data.main.temp,
//           humidity: data.main.humidity,
//         });
//       })
//       .catch(error => {
//         console.error("Error fetching weather data:", error);
//         // Optionally, update the UI to reflect the error
//       });
//   };

//   useEffect(() => {
//     getCurrentLocation();
//   }, []);

//   const UpdateMapPosition = () => {
//     const map = useMap();
//     if (location.latitude && location.longitude) {
//       map.flyTo([location.latitude, location.longitude], 13);
//     }
//     return null;
//   };

//   return (
//     <div>
//       <h2>Current Location: 
//         <span id="location">{location.latitude && location.longitude ? `${location.latitude}, ${location.longitude}` : "Loading..."}</span>
//       </h2>
//       <h3>Weather Conditions: 
//         <span id="weather">{weather ? `Temperature: ${weather.temperature}°C, Humidity: ${weather.humidity}%` : "Loading..."}</span>
//       </h3>
//       {location.latitude && location.longitude && (
//         <MapContainer
//   center={[location.latitude, location.longitude]}
//   zoom={13}
//   style={{ height: 'calc(100vh - 20px)', width: '100%' }}>
//   <TileLayer
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   />
//   <Marker position={[location.latitude, location.longitude]} />
//   <UpdateMapPosition />
// </MapContainer>
//       )}
//     </div>
//   );
// };

// export default MapComponent;

// MapComponent.js

// MapComponent.js
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

    const fetchWeatherData = (latitude, longitude) => {
      const apiKey = 'c9b63b8eb345f5756610d005b006e6c4';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          return response.json();
        })
        .then(data => {
          console.log("Weather ", data);

          const description = data.weather && data.weather.length > 0 ? data.weather[0].description : 'No description available';
          const rain = data.rain ? data.rain['1h'] : 0;

          setWeather({
            temperature: data.main.temp,
            humidity: data.main.humidity,
            rain,
            description,
          });
        })
        .catch(error => {
          console.error("Error fetching weather ", error);
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