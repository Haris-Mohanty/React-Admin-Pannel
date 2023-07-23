import React from 'react'
import {useTheme} from "@mui/material"
import { tokens } from '../theme'
import {mockBarData as data} from "../data/mockData"


const PieChart = () => {
    const theme  = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <div>
      
    </div>
  )
}

export default PieChart
