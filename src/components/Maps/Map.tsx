import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px', // Reducí la altura para una mejor visualización en el ejemplo
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

interface MapComponentProps {
  apiKey: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ apiKey }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

const NotificationComponent: React.FC = () => {
  return (
    <div>
      <h2>Cuadro de notificaciones</h2>
    </div>
  );
};

const ActionButtons: React.FC = () => {
  const handleFotitoClick = () => {
    alert('Tomando fotito!');
  };

  const handlePlantarHuautliClick = () => {
    alert('Plantando Huautli!');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={handleFotitoClick}>Fotito</button>
      <button onClick={handlePlantarHuautliClick} style={{ marginLeft: '10px' }}>
        Plantar Huautli
      </button>
    </div>
  );
};

interface MapComponentContainerProps {
  apiKey: string;
}

const MapComponentContainer: React.FC<MapComponentContainerProps> = ({ apiKey }) => {
  return (
    <div>
      <NotificationComponent />
      <MapComponent apiKey='AIzaSyDVBjpmS8QBNbc8nfHi3DcTu2hNsOgEuMA' />
      <ActionButtons />
    </div>
  );
};

export default MapComponentContainer;
