import { Box } from "@mui/material"
import React from "react"


const Topbar1 =() =>{
       

        return(
           
            <Box
                backgroundColor= "#040509"
                justifyContent= "space-between"
                p= {1}
             sx={{
                display: "flex",
                height: 32,
                justifyContent: "center"

            }}>
            <Box
                display="flex"
                justifyContent="space-between"
                padding= "0 20px"
            >
                    <Box display="flex"
                        margin="0 10px"
                        color="white"
                        fontWeight="bold"
                    >
                       IP: 
                    </Box>
                    <Box display="flex"
                        margin="0 10px"
                        color="white"
                        fontWeight="bold"
                    >
                        Status:
                    </Box>
                    <Box display="flex"
                         margin="0 10px"
                         color="white"
                         fontWeight="bold"
                            >
                        Time:
                    </Box>

                </Box>
            </Box>

        )
}

export default Topbar1;