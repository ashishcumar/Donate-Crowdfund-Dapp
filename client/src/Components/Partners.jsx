import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import rotatingImgBg from "../assets/rotatingImgBg.svg";
import { partners } from "../helpers/jsonMapping";

function Partners() {
  return (
    <Grid
      sx={{
        padding: ["24px", "64px 48px"],
        minHeight: "600px",
      }}
    >
      <Grid
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: "24px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          background: "quinary",
          placeContent: "center",
        }}
      >
        <Image
          src={rotatingImgBg}
          alt="rotatingImgBg"
          sx={{
            position: "absolute",
            height: "500px",
            objectFit: "contain",
            top: ["-40%", "-50%"],
            right: ["-40%", "-10%"],
            animation: "rotate 30s linear infinite",
            "@keyframes rotate": {
              from: {
                transform: "rotate(0deg)",
              },
              to: {
                transform: "rotate(360deg)",
              },
            },
            // zIndex: -1,
            opacity: "0.5",
          }}
        />

        <Image
          src={rotatingImgBg}
          alt="rotatingImgBg"
          sx={{
            position: "absolute",
            height: "500px",
            objectFit: "contain",
            bottom: ["-40%", "-50%"],
            left: ["-40%", "-10%"],
            animation: "rotate 30s linear infinite",
            "@keyframes rotate": {
              from: {
                transform: "rotate(0deg)",
              },
              to: {
                transform: "rotate(360deg)",
              },
            },
            // zIndex: -1,
            opacity: "0.5",
          }}
        />
        <Text
          color="secondary"
          margin={"12px 0"}
          sx={{ fontSize: ["18px", "28px"], fontWeight: "bold" }}
        >
          Our partners
        </Text>
        <Box sx={{ marginBottom: "24px" }}>
          <Text
            color="white"
            fontFamily={"primary"}
            sx={{
              fontSize: ["24px", "42px"],
              fontWeight: "bold",
              lineHeight: "1",
            }}
          >
            Trusted and endorsed by
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
            world-class companies
          </Text>
        </Box>
        <Grid
          sx={{
            gridTemplateColumns: [
              "1fr 1fr",
              "1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr 1fr",
            ],
            gap: ["16px", "36px"],
            margin: ["24px 0", "48px 0"],
          }}
        >
          {partners.map((src) => {
            return (
              <Box sx={{ margin: ["12px", "24px 12px"] }} key={src}>
                <Image
                  src={src}
                  alt={src}
                  sx={{
                    height: ["24px", "36px"],
                    objectFit: "contain",
                  }}
                />
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Partners;
