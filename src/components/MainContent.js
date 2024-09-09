import React from 'react';
import Button from '@mui/material/Button';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="lead-info">
        <nav>
          <span>Dashboard</span> / <span>Lead</span> / <strong>LE-010071</strong>
        </nav>
        <h1>LE-010071</h1>
        <Button variant="contained" color="primary">Mark as Converted</Button>
      </div>

      <div className="lead-status-buttons">
        <Button variant="outlined" color="warning">New</Button>
        <Button variant="outlined">Contacted</Button>
        <Button variant="outlined">Nurturing</Button>
        <Button variant="outlined">Qualified</Button>
        <Button variant="outlined">Unqualified</Button>
      </div>

      <div className="lead-details">
        <h2>Mamta Naik</h2>
        <p>Assigned to Aniruddh Naidu</p>
        <Button variant="outlined" color="success">Create Account</Button>
        <Button variant="outlined" color="warning">Create Contact</Button>
      </div>
    </main>
  );
};

export default MainContent;
