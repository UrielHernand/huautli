import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import amaranto from '../../../assets/amaranto.jpeg';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MenuIcon from '@mui/icons-material/Menu';
import NatureIcon from '@mui/icons-material/Nature';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';


const Menu: React.FC = () => {
  return (
    <Container>
      <Card className="menu-card">
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <img src={amaranto} alt="Welcome" className="logo" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h3" gutterBottom className="menu-title">
                Huautli
              </Typography>

              <Divider className="divider" />

              <Typography variant="subtitle2" color="text.secondary" className="wallet-text">
                Tu Wallet:
                <MonetizationOnIcon style={{ marginLeft: '5px', fontSize: '1rem' }} />
              </Typography>
              <Typography variant="body2" color="text.secondary" className="wallet-amount">
                500 Monedas
              </Typography>

              <Divider className="divider" />

              <List component="nav" className="menu-list">
                <Link to="/mis-huautlis" className="link" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItem button className="menu-item">
                    <ListItemIcon>
                      <NatureIcon className="menu-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Mis Huautlis" className="menu-text" />
                  </ListItem>
                </Link>

                <Link to="/misiones" className="link" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItem button className="menu-item">
                    <ListItemIcon>
                      <AssignmentIcon className="menu-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Misiones" className="menu-text" />
                  </ListItem>
                </Link>

                <Link to="/mas-huautlis" className="link" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItem button className="menu-item">
                    <ListItemIcon>
                      <GroupAddIcon className="menu-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Más Huautlis" className="menu-text" />
                  </ListItem>
                </Link>

                <Link to="/mis-puntos" className="link" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItem button className="menu-item">
                    <ListItemIcon>
                      <StarIcon className="menu-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Mis Puntos" className="menu-text" />
                  </ListItem>
                </Link>
              </List>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Menu;
