import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";
import FacebookIcon from "../assets/icons/facebook-circled.svg";
import TwitterIcon from "../assets/icons/twitter-circled.svg";
import InstagramIcon from "../assets/icons/instagram.svg";

const Footer = () => {
  const isXsScreen = useMediaQuery("(max-width:900px)");
  return (
    <Box mt="80px" bgcolor="#ffcccc">
      <Stack
        gap="40px"
        alignItems="center"
        justifyContent="space-between"
        direction={isXsScreen ? "column" : "row"}
        color="fff"
      >
        <img src={Logo} alt="logo" width="250px" height="133px" />
        <Stack alignItems="center" direction="row" gap="20px">
          <Typography variant="body1">Follow us on:</Typography>
          <a href="https://facebook.com">
            <img src={FacebookIcon} alt="Facebook" width="32" height="32" />
          </a>
          <a href="https://twitter.com">
            <img src={TwitterIcon} alt="Twitter" width="32" height="32" />
          </a>
          <a href="https://instagram.com">
            <img src={InstagramIcon} alt="Instagram" width="32" height="32" />
          </a>
        </Stack>
        <Stack alignItems="center" direction="row" gap="20px">
          <Typography variant="body1">Contact us:</Typography>
          <Typography variant="body2">123 Main St, Anytown Ukraine</Typography>
          <Typography variant="body2">info@example.com</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
