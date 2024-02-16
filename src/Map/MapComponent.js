import React, { useEffect, useState } from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import '../App.css';

function MapComponent() {

  const [position,setPosition] = useState([51.505, -0.09]); 
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
          setLoading(false);
          console.log('Working')
        },
        (error) => {
          console.error('Geolocation error:', error);
          setLoading(false);
        }
      );
      }else{
      setLoading(false);
      }
  }, []);

  return (
    <div className="mapContainer">
      {loading ? (
        <p>Loading...</p>
      ):(
    <MapContainer center={position} zoom={13}  style={{height:'64vh', width: '100%'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>
          You are here.
        </Popup>
      </Marker>
    </MapContainer>
      )}
    </div>
  );
}

export default MapComponent;