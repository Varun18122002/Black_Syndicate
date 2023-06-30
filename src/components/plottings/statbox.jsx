import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "./progresscircle";
import React from "react";


const StatBox = ({ title, subtitle, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box height="100px" width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between" >
                <Box>
                    <Typography
                        variant="h1"
                        fontWeight="bold"
                        sx={{ colorL: colors.grey[100] }}
                    >
                        {title}
                    </Typography>

                    <Box display="flex" justifyContent="space-between">
                        <Typography
                            variant="h4"
                            fontStyle="italic"
                            sx={{ color: colors.green[500] }}
                        >
                            {subtitle}
                        </Typography>
                        <Typography
                            variant="h4"
                            fontStyle="italic"
                            sx={{ color: colors.green[600] }}
                        >
                            {increase}
                        </Typography>

                    </Box>
                </Box>
                <Box>
                     <ProgressCircle progress={progress} />
                </Box>

            </Box>

        </Box>
    )
}

export default StatBox;