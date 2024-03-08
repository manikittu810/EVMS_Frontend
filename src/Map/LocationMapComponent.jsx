import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

const LocationMapComponent = ({ location }) => {
  const { latitude, longitude } = location;

  const UpdateMapPosition = () => {
    const map = useMap();
    if (latitude && longitude) {
      map.flyTo([latitude, longitude], 13);
    }
    return null;
  };

  return latitude && longitude ? (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: '200px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]} />
      <UpdateMapPosition />
    </MapContainer>
  ) : null;
};
export default LocationMapComponent;