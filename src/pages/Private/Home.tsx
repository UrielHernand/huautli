import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';

import amaranto from '../../assets/amaranto.jpeg';

const Home: React.FC = () => {
  return (
    <Container>
      <Card>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={amaranto} alt="Welcome" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h2" component="div" gutterBottom>
                ¡Bienvenido!
              </Typography>

              <Typography variant="h1" color="text.secondary">
                Huautli
              </Typography>

              <Typography variant="h5" color="text.secondary">
                ¿Estás listo para jugar?
              </Typography>

              <Button variant="contained" color="primary" style={{ marginTop: '20px' , width : "70%"}} >
                Jugar
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Home;
