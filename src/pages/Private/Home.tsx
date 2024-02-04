import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import amaranto from '../../assets/amaranto.jpeg';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import './Home.css';

const Home: React.FC = () => {
  return (
    <Container>
      <Card>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <img src={amaranto} alt="Welcome" className="logo" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                ¡Bienvenido!
              </Typography>

              <Typography variant="h4" color="text.secondary">
                Al Mundo de Huautli
              </Typography>

              <Typography variant="subtitle1" color="text.secondary">
                Bienvenido al emocionante mundo de Huautli. ¿Estás listo para jugar y explorar?
              </Typography>

              <Button
                variant="contained"
                color="primary"
                startIcon={<PlayCircleOutlineIcon />}
                style={{ marginTop: '20px', width: '100%' }}
              >
                Comenzar a Jugar
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Home;
