import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const LocationMapComponent = ({ location }) => {
  const UpdateMapPosition = () => {
    const map = useMap();
    if (location.latitude && location.longitude) {
      map.flyTo([location.latitude, location.longitude], 13);
    }
    return null;
  };

  return location.latitude && location.longitude ? (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={13}
      style={{ height: '200px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[location.latitude, location.longitude]} />
      <UpdateMapPosition />
    </MapContainer>
  ) : null;
};

export default LocationMapComponent;