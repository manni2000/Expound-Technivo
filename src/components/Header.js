import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>Test</span>
      </div>
      <div className="header-icons">
        <SearchIcon />
        <NotificationsIcon />
        <CalendarTodayIcon />
        <SettingsIcon />
        <Avatar>U</Avatar>
      </div>
    </header>
  );
};

export default Header;
