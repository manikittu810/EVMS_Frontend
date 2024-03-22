// import './App.css';
// // import LoginComponent from './Login/LoginComponent';
// import RegistrationComponent from './Login/RegistrationComponent';
// import MapComponent from './Map/MapComponent';

// function App() {
//   return (
//     <div className="App">
//       <RegistrationComponent/>
//       {/* <LoginComponent /> */}
//       <MapComponent />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginComponent from './Login/LoginComponent'; // Adjust path as necessary
import RegistrationComponent from './Login/RegistrationComponent'; // Adjust path as necessary
// import Navbar from './Login/Navbar'; // Adjust path as necessary
import LocationMapComponent from './Map/LocationMapComponent';
import MapComponent from './Map/MapComponent';
import WeatherInfoComponent from './Map/WeatherInfoComponent';

// Import other components as needed

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/login" element={<LoginComponent />} /> */}
        <Route path="/register" element={<RegistrationComponent />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/weather" element={<WeatherInfoComponent />} />
        <Route path="/location" element={<LocationMapComponent />} />

        {/* Setup other routes */}
      </Routes>
    </Router>
  );
}

export default App;

