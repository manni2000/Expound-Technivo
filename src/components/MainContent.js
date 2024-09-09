import React, { useState } from 'react';
import { Box, Button, Typography, Tabs, Tab, TextField, IconButton, Paper, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CircleIcon from '@mui/icons-material/Circle';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LeadHeader = () => {
  return (
    <Box
      className="lead-header"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 24px',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '16px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <nav>
            <span>Dashboard</span> / <span>Lead</span> / <strong>LE-010071</strong>
          </nav>
          <h1 className="lead-title">LE-010071</h1>
        </div>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <IconButton>
            <AddIcon sx={{ fontSize: '20px', color: '#607d8b' }} />
          </IconButton>
          <IconButton>
            <SearchIcon sx={{ fontSize: '20px', color: '#607d8b' }} />
          </IconButton>
          <IconButton>
            <PersonAddIcon sx={{ fontSize: '20px', color: '#607d8b' }} />
          </IconButton>
          <IconButton>
            <ViewModuleIcon sx={{ fontSize: '20px', color: '#607d8b' }} />
          </IconButton>
          <IconButton>
            <RefreshIcon sx={{ fontSize: '20px', color: '#607d8b' }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
        <div className="button-group" sx={{ display: 'flex', gap: '8px' }}>
          <Button variant="outlined" color="warning">New</Button>
          <Button variant="outlined">Contacted</Button>
          <Button variant="outlined">Nurturing</Button>
          <Button variant="outlined">Qualified</Button>
          <Button variant="outlined">Unqualified</Button>
        </div>
        <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
          Mark as Converted
        </Button>
      </Box>
    </Box>
  );
};

const LeadDetails = () => {
  
  const [hovered, setHovered] = useState(false);

  
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Box className="lead-details" sx={{ padding: 2, flex: 1 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <AccountCircleIcon sx={{ fontSize: 40, marginRight: 2 }} />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>Mamta Naik</Typography>
          <Typography variant="body2" color="textSecondary">Assigned to Aniruddh Naidu</Typography>
        </Box>
      </Box>

      {/* Action buttons */}
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <Button variant="contained" color="success">Create Account</Button>
        <Button variant="contained" color="primary">Create Contact</Button>
      </Box>

      {/* Tabs */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e0e0e0', paddingBottom: 1 }}>
        <Button variant="text" sx={{ fontWeight: 'bold' }}>Basic Details</Button>
        <Button variant="text">Account Details</Button>
        <Button variant="text">Lead Details</Button>
        <Button variant="text">Team</Button>
        <Button variant="text">Other Contacts</Button>
      </Box>

      {/* Contact list with hover behavior */}
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Other Contacts</Typography>
        <Box
          sx={{ marginTop: 1, padding: 2, backgroundColor: hovered ? '#f5f5f5' : 'transparent', borderRadius: 2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Pranab Biyani</Typography>
          <Typography variant="body2">Associate VP, Sales Head</Typography>

          {hovered && (
            <Box sx={{ marginTop: 1, display: 'flex', gap: 2 }}>
              <Button variant="outlined" color="success">Account Choose</Button>
              <Button variant="outlined" color="primary">Contact Choose</Button>
            </Box>
          )}
        </Box>

        <Box
          sx={{ marginTop: 1, padding: 2, backgroundColor: hovered ? '#f5f5f5' : 'transparent', borderRadius: 2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Nayan Johal</Typography>
          <Typography variant="body2">Associate VP, Sales Head</Typography>

          {hovered && (
            <Box sx={{ marginTop: 1, display: 'flex', gap: 2 }}>
              <Button variant="outlined" color="success">Account Choose</Button>
              <Button variant="outlined" color="primary">Contact Choose</Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const ActivitySection = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => setTabValue(newValue);

  return (
    <Box className="activity-section" sx={{ flex: 1, padding: 2, borderRight: '1px solid #e0e0e0' }}>
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="activity tabs">
        <Tab label="Activity" />
        <Tab label="Actionables" />
        <Tab label="Tasks" />
        <Tab label="Notes & Files" />
      </Tabs>
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <IconButton color="primary"><PhoneIcon /></IconButton>
        <IconButton color="primary"><EmailIcon /></IconButton>
        <IconButton color="primary"><EventIcon /></IconButton>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField label="Subject" variant="outlined" size="small" fullWidth margin="normal" />
        <TextField label="Add People" variant="outlined" size="small" fullWidth margin="normal" />
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField label="Due Date" type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} size="small" margin="normal" />
        <TextField label="Time" type="time" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} size="small" margin="normal" />
      </Box>
      <TextField label="Description" variant="outlined" fullWidth multiline rows={2} size="small" margin="normal" />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="text" startIcon={<AddIcon />} sx={{ textTransform: 'none', marginY: 2 }}>Add Team Member</Button>
        <Button variant="contained" sx={{ marginTop: 2 }}>Submit</Button>
      </Box>
    </Box>
  );
};

const StageHistory = () => {
  const historyItems = [
    { date: '28/08', time: '09:00am', action: 'Created Jiya Gopal', type: 'Team' },
    { date: '28/08', time: '10:00am', action: 'Assigned to Aniruddh Naidu', type: 'Team' },
    { date: '28/08', time: '12:00pm', action: 'Arrange a Call', type: 'Event' },
    { date: '28/08', time: '04:00pm', action: 'Marked as Contacted', type: 'Lead Update' }
  ];

  return (
    <Box className="stage-history" sx={{ flex: 1, padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Stage History</Typography>
      <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: 2 }}>August 2024</Typography>
      <Divider sx={{ marginBottom: 2 }} />
      {historyItems.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: 2 }}>
          <Typography variant="body2" sx={{ width: '50px', marginRight: 1 }}>{item.date}</Typography>
          <CircleIcon sx={{ fontSize: '12px', color: '#1976d2', marginRight: 1 }} />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {item.type} | {item.time}
            </Typography>
            <Typography variant="body2">{item.action}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const UpcomingOverdueSection = () => {
  const tasks = [
    { id: 1, name: 'Arrange a Call', start: '27/08/2024 12:00pm', end: '27/08/2024 01:00pm', icon: <PhoneInTalkIcon />, color: '#e0f2f1' },
    { id: 2, name: 'Follow Up Email', start: '27/08/2024 02:00pm', end: '27/08/2024 02:30pm', icon: <EmailIcon />, color: '#ffebee' },
    { id: 3, name: 'Arrange a Call', start: '28/08/2024 10:00am', end: '28/08/2024 10:30am', icon: <EventIcon />, color: '#e3f2fd' }
  ];

  return (
    <Box sx={{ marginTop: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Upcoming & Overdue
        </Typography>
        <a href="#" style={{ textDecoration: 'underline', fontSize: '14px', color: '#1976d2' }}>View All</a>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', padding: 2, justifyContent: 'start', flexWrap: 'nowrap' }}>
        {tasks.map(task => (
          <Paper key={task.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2, minWidth: '200px', backgroundColor: task.color, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginRight: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              {task.icon}
              <Typography variant="body1" sx={{ marginLeft: 1 }}><strong>{task.name}</strong></Typography>
            </Box>
            <Typography variant="body2">Start: {task.start}</Typography>
            <Typography variant="body2">End: {task.end}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};


const MainApp = () => {
  return (
    <Box className="app-content" sx={{ padding: 2 }}>
      <LeadHeader />
      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
        <LeadDetails />
        <Box sx={{ flex: 1, paddingLeft: 2, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
            <ActivitySection />
            <StageHistory />
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <UpcomingOverdueSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainApp;
