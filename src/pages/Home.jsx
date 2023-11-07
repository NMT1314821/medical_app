import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Toolbar from '@mui/material/Toolbar';
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import homeImage from '../assets/home3-bg.jpg'

const drawerWidth = 240;

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const sidebarHeadings = ['Home', 'Profile', 'Doctors', 'Logout']
  const sidebarIcons = [<HomeIcon/>, <PersonIcon/>, <Person2Icon/>, <LogoutIcon/>]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {sidebarIcons.map((text, index) => (
            sidebarHeadings[index] === "Logout" ? <ListItem key={index} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {text}
              </ListItemIcon>
              <RouterLink style={{color: "#000000DE", textDecoration: 'none'}} to='/'>{sidebarHeadings[index]}</RouterLink>
            </ListItemButton>
          </ListItem> 
          :
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text}
              </ListItemIcon>
              <ListItemText primary={sidebarHeadings[index]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <h2 style={{color: "#000", textAlign: "center"}}>Welcome to DAT Medicals</h2>

      {/* <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      </Box> */}
      <Card sx={{ minWidth: 345 }}>
      <CardMedia
        sx={{ height: 1024 }}
        image={homeImage}
      />
      </Card>
    </Box>
  );
}

export default Home;
