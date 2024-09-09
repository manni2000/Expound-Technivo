import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TestIcon from '@mui/icons-material/Category'; 
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#0d47a1', alignItems: 'center' }}>
      {}
      <Box className="sidebar-logo" sx={{ display: 'flex', alignItems: 'center' }}>
        <TestIcon sx={{ fontSize: '40px', color: '#fff', marginRight: '10px' }} />
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>Test</Typography>
      </Box>

      {}
      <Box className="header-icons" sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <SearchIcon sx={{ fontSize: '24px', color: '#fff' }} />
        <CalendarTodayIcon sx={{ fontSize: '24px', color: '#fff' }} />
        <NotificationsIcon sx={{ fontSize: '24px', color: '#fff' }} />
        <SettingsIcon sx={{ fontSize: '24px', color: '#fff' }} />
        <Avatar sx={{ bgcolor: '#1976d2' }}>U</Avatar>
      </Box>
    </header>
  );
};

export default Header;
