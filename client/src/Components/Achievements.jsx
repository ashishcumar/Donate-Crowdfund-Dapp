import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import rotatingImgBg from "../assets/rotatingImgBg.svg";
import DonateBtn from "./DonateBtn";
import { achievements } from "../helpers/jsonMapping";

function Achievements() {
  return (
    <Grid
      sx={{
        padding: ["24px", "64px 48px"],
        position: "relative",
        minHeight: "400px",
        overflow: "hidden",
      }}
    >
      <Image
        src={rotatingImgBg}
        alt="rotatingImgBg"
        sx={{
          position: "absolute",
          height: "500px",
          objectFit: "contain",
          border: "1px solid black",
          top: ["-40%", "-50%"],
          left: ["-40%", "-10%"],
          animation: "rotate 20s linear infinite",
          "@keyframes rotate": {
            from: {
              transform: "rotate(0deg)",
            },
            to: {
              transform: "rotate(360deg)",
            },
          },
          zIndex: -1,
        }}
      />
      <Grid
        sx={{
          border: "2px solid red",
          gridTemplateColumns: ["1fr", "1fr", "2fr 3fr"],
        }}
      >
        <Box sx={{ border: "2px solid red" }}>
          <Text
            color="secondary"
            margin={"12px 0"}
            sx={{
              fontSize: ["18px", "28px"],
              fontWeight: "bold",
              height: "fit-content",
            }}
          >
            Our achievements
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
              We have accomplished
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
              great results
            </Text>
          </Box>
          <Text
            sx={{
              width: ["100%", "80%"],
              fontSize: ["14px", "18px"],
              margin: "12px 0 24px 0",
              // color
            }}
          >
            We've planted thousands of trees, protected habitats, cleaned rivers
            and lakes, and empowered local communities. These accomplishments
            embody our dedication to environmental stewardship and
            sustainability, creating a positive impact globally.
          </Text>
          <Box sx={{ margin: "24px 0", display: ["none", "block"] }}>
            <DonateBtn isLarge />
          </Box>
          <Box sx={{ margin: "24px 0", display: ["block", "none"] }}>
            <DonateBtn />
          </Box>
        </Box>
        <Grid
          sx={{
            border: "2px solid red",
            gap: "24px",
            gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr"],
            placeContent: "center",
          }}
        >
          {achievements.map((card) => {
            return (
              <Box
                key={card.text}
                sx={{
                  border: "1px solid yellow",
                  width: "fit-content",
                  margin: "auto",
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.text}
                  sx={{
                    height: ["60px", "80px"],
                    objectFit: "contain",
                  }}
                />
                <Text
                  sx={{
                    color: "primary",
                    fontFamily: "primary",
                    fontWeight: "bold",
                    fontSize: ["18px", "24px"],
                    lineHeight: 1,
                    marginTop: "12px",
                  }}
                >
                  {card.count}
                </Text>
                <Text
                  sx={{
                    color: "senary",
                    fontSize: ["14px", "18px"],
                    fontWeight: "500",
                  }}
                >
                  {card.text}
                </Text>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Achievements;
