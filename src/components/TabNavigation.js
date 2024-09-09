import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

const TabNavigation = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Tabs value={tabValue} onChange={handleTabChange} aria-label="lead details tabs">
      <Tab label="Basic Details" />
      <Tab label="Account Details" />
      <Tab label="Lead Details" />
      <Tab label="Team" />
      <Tab label="Other Contacts" />
    </Tabs>
  );
};

export default TabNavigation;
