import { Box, Drawer } from '@mui/material';
import React from 'react';
import 'src/styles/App.css';
import CustomDrawer from './CustomDrawer';
import FooterNavigation from './FooterNavigation';

function Dashboard(props: any) {
  const { children } = props
  const drawerWidth = 240;

  return (
    <div className="Dashboard">
      <Box sx={{display: "flex"}}>
        <Box>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            anchor="left"
            open
          >
            <CustomDrawer />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <Box sx={{ flexGrow: 4, p: 3 }}>
            {children}
          </Box>
          <FooterNavigation />
        </Box>
      </Box>      
    </div>
  );
}

export default Dashboard;
