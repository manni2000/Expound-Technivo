import React from 'react';
import { Box, IconButton, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

const Sidebar = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%', 
      padding: 2,
      backgroundColor: '#f4f4f4' 
    }}>
      <IconButton size="large" sx={{ mb: 2 }}><DashboardIcon fontSize="large" /></IconButton>
      <IconButton size="large" sx={{ mb: 2 }}><ContactsIcon fontSize="large" /></IconButton>
      <IconButton size="large" sx={{ mb: 2 }}><BusinessIcon fontSize="large" /></IconButton>
      <IconButton size="large" sx={{ mb: 2 }}><PeopleIcon fontSize="large" /></IconButton>
      <IconButton size="large" sx={{ mb: 2 }}><BarChartIcon fontSize="large" /></IconButton>
      <IconButton size="large" sx={{ mb: 2 }}><SettingsIcon fontSize="large" /></IconButton>
      <IconButton size="large" sx={{ mb: 2 }}><InfoIcon fontSize="large" /></IconButton>
      <Divider orientation="horizontal" flexItem sx={{ width: '100%', mt: 2 }} />
    </Box>
  );
};

export default Sidebar;
