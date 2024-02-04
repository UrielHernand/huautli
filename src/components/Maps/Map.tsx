import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Button, IconButton, Typography, Card, CardContent, Grid, Input } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PlantIcon from '@mui/icons-material/LocalFlorist';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 19.4326,
  lng: -99.1332,
};

interface MapComponentProps {
  apiKey: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ apiKey }) => {
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const { latLng } = event;
    const lat = latLng?.lat();
    const lng = latLng?.lng();
    alert(`Marcador añadido en: Latitud ${lat}, Longitud ${lng}`);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onClick={handleMapClick}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

const NotificationComponent: React.FC = () => {
  return (
    <Card style={{ margin: '20px' }}>
      <CardContent>
        <Typography variant="h4">Cuadro de notificaciones</Typography>
      </CardContent>
    </Card>
  );
};

const ActionButtons: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleFotitoClick = () => {
    alert('Tomando fotito!');
  };

  const handlePlantarHuautliClick = () => {
    alert('Plantando Huautli!');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4}>
          <Button
            variant="contained"
            onClick={handleFotitoClick}
            startIcon={<PhotoCameraIcon />}
            fullWidth
          >
            Tomar Fotito
          </Button>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Input type="file" onChange={handleFileChange} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button onClick={handlePlantarHuautliClick} fullWidth>
            <PlantIcon />
            Plantar Huautli
          </Button>
        </Grid>
      </Grid>
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
      <MapComponent apiKey={apiKey} />
      <ActionButtons />
    </div>
  );
};

export default MapComponentContainer;
