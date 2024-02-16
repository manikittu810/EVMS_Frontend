import React, { useEffect, useState } from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import '../App.css';

function MapComponent() {
  const [position,setPosition] = useState([51.505, -0.09]); 
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
          console.log('executed')
        },
        (error) => {
          console.error('Geolocation error:', error);
        }
      );
    }
  }, []);

  return (
    <MapContainer center={position} zoom={13} className="mapContainer">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>
          A simple popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
