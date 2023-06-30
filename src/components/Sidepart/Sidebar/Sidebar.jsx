import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from "../../../theme"
import React from "react";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { Link } from "react-router-dom";
import mainlogo from '/home/varun/Varun/Drive_f/Kvach/black_syndicate/src/components/Sidepart/Sidebar/mainlogo.png'

const Item = ({ title, path, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        margin: "0px 0px 20px 0px",
        color: colors.grey[100]
      }}
      onClick={() => setSelected(title)}
      icon={icon}

    >
      <Typography variant="h3">{title}</Typography>
      <Link to={path} />
    </MenuItem>
  );
};



const Sidebar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard")

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.black[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >


      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <img alt="logo" src={mainlogo} height="50px" width="50px" /> : undefined}
            style={{
              margin: "10px 0 30px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="10px"
              >

                <Typography fontWeight="bold" variant="h2" color={colors.grey[100]}>
                  F L U F F Y
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <img alt="logo" src={mainlogo} height="50px" width="50px" />    {/*<MenuOutlined/>*/}
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="30px">

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  User Name
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Item bar */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}
            paddingTop="40px"
          >
            <Item
              title="Dashboard"
              path="/"
              icon={<DashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}


            />
            <Item
              title="Report"
              path="/report"
              icon={<SummarizeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="History"
              path="/history"
              icon={<HistoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Labs"
              path="/labs"
              icon={<ScienceOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Devices"
              path="/devices"
              icon={<DevicesOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  );
}

export default Sidebar;
