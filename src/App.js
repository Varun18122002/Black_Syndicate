import { ColorModeContext,useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import Topbar from "./components/Toppart/global/topbar2";
import {Route,Routes} from "react-router-dom";
import Topbar1 from "./components/Toppart/global/topbar1";
import Sidebar from "./components/Sidepart/Sidebar/Sidebar"
import Dashboard from "./components/scenes/dashboard"
import Devices from "./components/scenes/devices"
import History from "./components/scenes/history"
import Labs from "./components/scenes/labs"
import Report from "./components/scenes/report"
import { tokens } from "./theme";
import { useState } from "react";

// import PreLoader from "./components/scenes/Preloading/preloader";



function App() {

  const [theme, colorMode] =useMode();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  

  return (
    
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Topbar1/>
          <div className="app">
          <Sidebar isSidebar={isSidebar} />
            <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                  <Routes>
                  <Route path="/" element={<Dashboard/>}/>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/report" element={<Report/>}/>
                  <Route path="/history" element={<History/>}/>
                  <Route path="/labs" element={<Labs/>}/>
                  <Route path="/devices" element={<Devices/>}/>  
                </Routes>
            </main>
            
          </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
