import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import DonateBtn from "./DonateBtn";

function AboutUs() {
  return (
    <Grid
      sx={{
        display: "block",
        height: ["fit-content"],
        width: "100%",
        padding: ["24px", "64px 48px"],
        background: "tertiary",
        textAlign: "center",
      }}
    >
      <Text
        color="secondary"
        margin={"12px 0"}
        sx={{ fontSize: ["18px", "28px"], fontWeight: "bold" }}
      >
        About Us
      </Text>
      <Box sx={{ marginBottom: "12px" }}>
        <Text
          color="senary"
          fontFamily={"primary"}
          sx={{
            fontSize: ["24px", "42px"],
            fontWeight: "bold",
            lineHeight: "1",
          }}
        >
          Our mission is to help
        </Text>
        <Text
          color="senary"
          fontFamily={"primary"}
          sx={{
            fontSize: ["24px", "42px"],
            fontWeight: "bold",
            lineHeight: "1",
          }}
        >
          Earth breathe again
        </Text>
      </Box>
      <Box sx={{ width: "80%", margin: ["24px auto", "48px auto"] }}>
        <Text
          color="senary"
          sx={{ fontSize: ["14px", "18px"], marginBottom: "12px" }}
        >
          Welcome to <b>Donate</b> , where every donation plants a seed of hope
          for a greener future. At <b>Donate</b>, we are passionate about
          environmental sustainability and believe in the transformative power
          of tree planting.
        </Text>
        <Text color="senary" sx={{ fontSize: ["14px", "18px"] }}>
          Our mission is simple yet profound: to combat climate change, restore
          ecosystems, and create healthier environments by planting trees across
          the globe. Through community-driven efforts and your generous
          contributions, we aim to make a lasting impact on our planet.
        </Text>
      </Box>
      <DonateBtn />
    </Grid>
  );
}

export default AboutUs;
