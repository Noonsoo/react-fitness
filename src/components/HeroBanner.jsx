import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/banner.png";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px">
      <Typography fontFamily="Alegreya" color="#FF2625" fontWeight="600">
        Fitness club
      </Typography>
      <Typography
        fontWeight={700}
        fontFamily="Alegreya"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb="23px"
        mt="30px">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography
        fontFamily="Alegreya"
        fontSize="17px"
        lineHeight="25px"
        mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        fontFamily="Alegreya"
        href="#exercises"
        variant="contained"
        color="error"
        sx={{
          background: "#ff2625",
          padding: "10px",
        }}>
        Explore Exercises
      </Button>
      <Typography
        fontFamily="Alegreya"
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}>
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
