import React from "react";
import { Box, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/hero-banner-img.jpg";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "200px", xs: "70px" },
        ml: { sm: "50px" },
        textAlign: { lg: "left", sm: "center" },
      }}
      position="relative"
      p="20px"
    >
      <Typography variant="h2" color="#FF2625" fontWeight="600" fontSize="88px">
        Squad Squat
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "36px", xs: "30px" },
          width: { lg: "50%", xs: "100%" },
        }}
        mb="20px"
        mt="30px"
      >
        Our motto is 'Squat, sweat, and repeat'
        <br /> but our workouts are so much more than that
      </Typography>
      <Typography fontSize="22px" mb="20px">
        Checkout the most effective exercises
      </Typography>
      <Typography
        fontWeight="600"
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
          width: "65%",
        }}
        fontSize="100px"
      >
        But dont forget about squats
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
