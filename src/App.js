import './App.css';
import LoginComponent from './Login/LoginComponent';
import RegistrationComponent from './Login/RegistrationComponent';
import MapComponent from './Map/MapComponent';

function App() {
  return (
    <div className="App">
      <RegistrationComponent/>
      {/* <LoginComponent /> */}
      <MapComponent />
    </div>
  );
}

export default App;
