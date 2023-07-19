import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title={"TEAM"} subtitle={"Managing the Team Members"} />
    </Box>
  );
};

export default Team;
