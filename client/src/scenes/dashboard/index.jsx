import React from "react";
import Header from "../../components/Header";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={"DASHBOARD"} subtitle={"Welcome to your Dashboard!"} />
      </Box>
    </Box>
  );
};

export default Dashboard;
