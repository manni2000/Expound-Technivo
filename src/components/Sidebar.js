import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <DashboardIcon />
      <ContactsIcon />
      <BusinessIcon />
      <PeopleIcon />
      <BarChartIcon />
    </aside>
  );
};

export default Sidebar;
