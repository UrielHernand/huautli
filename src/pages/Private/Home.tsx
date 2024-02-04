import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, Divider } from '@mui/material';
import amaranto from '../../assets/amaranto.jpeg';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'; // Icono de monedas
import { Link } from 'react-router-dom';
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
                ¡Bienvenido a Huautli!
              </Typography>

              <Typography variant="h4" color="text.secondary">
              Bienvenido al emocionante mundo de Huautli. ¿Estás listo para jugar y explorar?
              </Typography>

              <Typography variant="subtitle1" color="text.secondary">
                ¡Comienza a plantar y ganar Huautlis!
              </Typography>

              <Divider style={{ margin: '20px 0' }} />

              <Button
                variant="contained"
                color="primary"
                startIcon={<PlayCircleOutlineIcon />}
                style={{ marginTop: '20px', width: '100%' }}
              >
                <Link to="/maps" className="link" style={{ textDecoration: 'none', color: 'white' }}>
                  ¡Comienza a Plantar!
                </Link>
              </Button>

              <Divider style={{ margin: '20px 0' }} />

              <Typography variant="subtitle2" color="text.secondary" style={{ marginBottom: '10px' }}>
                Tu Wallet:
                <MonetizationOnIcon style={{ marginLeft: '5px', fontSize: '1rem' }} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                500 Huautlis
              </Typography>

            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Home;
