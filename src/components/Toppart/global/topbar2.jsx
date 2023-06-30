import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../../theme"
import InputBase from '@mui/material/InputBase';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import { TerminalOutlined } from "@mui/icons-material";



const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search Bar */}
            <Box
                display="flex"
                backgroundColor={colors.black[400]}
                borderRadius="30px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* ICONS */}
            <Box display="flex" >

                <IconButton>
                    <TerminalOutlined />
                </IconButton>
                <IconButton  >
                    <PersonIcon />    {/* To change color <PersonIcon style={{ color: colors.black[400] }} /> */}
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <NightlightIcon />
                    ) : (
                        <LightModeIcon />
                    )
                    }
                </IconButton>

            </Box>

        </Box>
    )
};


export default { Topbar };