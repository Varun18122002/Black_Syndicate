import React from 'react';
import { Box } from '@mui/material';
import Header from './headding/header';


function Dashboard() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DEVICES" subtitle="The connected devices are shown here"/>
      </Box>
    </Box>

  );
}

export default Dashboard;