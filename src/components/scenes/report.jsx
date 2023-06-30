import React from 'react';
import { Box } from '@mui/material';
import Header from './headding/header';


function Dashboard() {
  return (
    
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="REPORT" subtitle="You can download the past and current reports here"/>
      </Box>
    </Box>

  );
}

export default Dashboard;