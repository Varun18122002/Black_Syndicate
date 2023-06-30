import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import Header from './headding/header';
import { tokens } from '../../theme';
import { DownloadOutlined, } from '@mui/icons-material';
import StatBox from '../plottings/statbox';


function Dashboard() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 
  return (


    <Box m="20px">
    {/*Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Your current status can be seen here" />


        <Box>
          <Button
            sx={{
              backgroundColor: colors.indigo[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "30px",
            }}>
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/*Grids*/}
      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.black[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="30px"
        >
          <StatBox
            title="Network"
            subtitle="11129"
            progress="0.75"
            increase="+14%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.black[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="30px"
        >
          <StatBox
            title="OS"
            subtitle="45363"
            progress="0.50"
            increase="+21%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.black[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="30px"
        >
          <StatBox
            title="System"
            subtitle="32441"
            progress="0.30"
            increase="+5%"
          />
        </Box>

      </Box>

    </Box>

  );
}

export default Dashboard;
