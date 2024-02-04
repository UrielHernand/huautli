import './App.css'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '900px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const App: React.FC = () => {

  const handleFotitoClick = () => {
    alert('Tomando fotito!');
  };

  const handlePlantarHuautliClick = () => {
    alert('Planando Huautli!');
  };
  return (
    <div>

      <div>
        <h1>Cuadro de notificaciones</h1>
      </div>

      <LoadScript
        googleMapsApiKey="GOOGLE_MAPS_API_KEY" //Pendiente
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleFotitoClick}>Fotito</button>
        <button onClick={handlePlantarHuautliClick} style={{ marginLeft: '10px' }}>
          Plantar Huautli
        </button>
      </div>
    </div>
  );
};

export default App;
