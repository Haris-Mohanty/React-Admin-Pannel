import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const tokens = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle={"Frequently Asked Questions Page."} />
    </Box>
  );
};

export default FAQ;
