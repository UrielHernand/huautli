import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { EjectOutlined } from '@mui/icons-material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PuntosGenerales: React.FC = () => {
  const barChartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Puntos obtenidos',
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
        borderWidth: 2,
        hoverBackgroundColor: '#45a049',
        hoverBorderColor: '#45a049',
        data: [50, 80, 120, 90, 110],
      },
    ],
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom style={{ color: '#4CAF50', display: 'flex', alignItems: 'center' }}>
            <EjectOutlined style={{ marginRight: '10px' }} />
            Mis Puntos en Blockchain
          </Typography>

          <Grid container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={12} md={6}>
              <Bar
                data={barChartData}
                options={{
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      backgroundColor: '#4CAF50',
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

          <Typography variant="subtitle1" color="text.secondary" style={{ marginTop: '20px' }}>
            Información adicional sobre tus puntos:
          </Typography>

          <Typography variant="body1" color="text.secondary" style={{ display: 'flex', alignItems: 'center' }}>
            <MonetizationOnIcon style={{ marginRight: '5px', color: '#4CAF50' }} />
            500 Monedas
          </Typography>

          <Typography variant="body1" color="text.secondary" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <ArrowUpwardIcon style={{ marginRight: '5px', color: '#4CAF50' }} />
            ¡Sigue así! Tus puntos aumentan mes a mes. Mantén tu compromiso con el medio ambiente.
          </Typography>

          <Typography variant="body1" color="text.secondary" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <TrendingUpIcon style={{ marginRight: '5px', color: '#4CAF50' }} />
            ¡Cada vez más alto! Tus puntos están en constante crecimiento.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PuntosGenerales;
