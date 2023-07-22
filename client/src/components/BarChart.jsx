import React from 'react'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const BarChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <div>
      
    </div>
  )
}

export default BarChart
