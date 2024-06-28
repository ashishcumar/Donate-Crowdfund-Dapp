import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import landingBg from "../assets/landingBg.jpg";
import donateLogo from "../assets/donateLogo.svg";
import DonateBtn from "./DonateBtn";

function LandingSection() {
  return (
    <Grid
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        justifyContent:"space-between",
      }}
    >
      <Image
        src={landingBg}
        alt="landingBg"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          filter: "brightness(0.4)",
          zIndex: -1,
        }}
      />
      <Flex
        sx={{
          padding: ["24px", "48px"],
          border: "1px solid red",
          justifyContent: "space-between",
          alignItems: "center",
          height: "fit-content",
         }}
      >
        <Image
          src={donateLogo}
          alt="logo"
          sx={{ height: ["24px", "36px"], objectFit: "contain" }}
        />
        <Box sx={{ border: "2px solid red" }}>
          <DonateBtn />
        </Box>
      </Flex>
      <Grid
        sx={{
          border: "2px solid brown",
          padding: ["24px", "48px"],
          margin: "auto",
        }}
      >
        <Box sx={{ marginBottom: "24px" }}>
          <Text
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: ["36px", "56px"],
              fontWeight: "bold",
              fontFamily: "primary",
              lineHeight: 1,
            }}
          >
            {" "}
            Help us reforest the Amazonia{" "}
          </Text>
          <Text
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: ["36px", "56px"],
              fontWeight: "bold",
              fontFamily: "primary",
              lineHeight: 1,
            }}
          >
            {" "}
            and bring back worlds heart
          </Text>
        </Box>
        <Text
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: ["18px", "24px"],
            width:["100%" ,"80%"],
            margin: "auto",
          }}
        >
          Join us in restoring the Amazon rainforest, preserving biodiversity,
          and combating deforestation. Your support enables us to plant trees,
          protect habitats, clean waterways, and empower communities. Together,
          we can make a lasting impact on our environment and future
          generations.
        </Text>
        <Box sx={{ margin: ["24px auto", "48px auto"] }}>
          <DonateBtn isLarge/>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LandingSection;
