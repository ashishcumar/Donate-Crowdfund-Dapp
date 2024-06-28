import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import joinUsBg from "../assets/joinUsBg.jpg";

function JoinUs() {
  return (
    <Grid
      sx={{
        padding: ["48px"],
        position: "relative",
        minHeight:[ 'fit-content',"500px"],
        placeContent: "center",
      }}
    >
      <Image
        src={joinUsBg}
        alt="joinUs"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          filter: "brightness(0.5)",
          zIndex: -1,
        }}
      />
      <Box sx={{ margin: ["24px 0","48px 0"], textAlign: "center" }}>
        <Text
          color="white"
          fontFamily={"primary"}
          sx={{
            fontSize: ["24px", "42px"],
            fontWeight: "bold",
            lineHeight: "1",
          }}
        >
          Join us and help the
        </Text>
        <Text
          color="white"
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
      <Text
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: ["14px", "18px"],
          textAlign: "center",
        }}
      >
        Join us on our journey to make a lasting impact on the environment by
        contributing to the
      </Text>
      <Text
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: ["14px", "18px"],
          textAlign: "center",
        }}
      >
        restoration of Earth's green lungs and the revitalization of its
        biodiversity.
      </Text>
    </Grid>
  );
}

export default JoinUs;
