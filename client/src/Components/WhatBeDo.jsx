import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import treesRestored from "../assets/treesRestored.png";
import animalSaved from "../assets/animalsSaved.png";
import waterCleaning from "../assets/waterCleaned.png";
import communityHelp from "../assets/communityHelp.png";
import { whatBeDo } from "../helpers/jsonMapping";

function WhatBeDo() {
  return (
    <Grid
      sx={{
        display: "block",
        height: ["fit-content"],
        width: "100%",
        padding: ["24px", "64px 48px"],
        border: "2px solid black",
        background: "tertiary",
        // placeContent: "center",
        textAlign: "center",
      }}
    >
      <Text
        color="secondary"
        margin={"12px 0"}
        sx={{ fontSize: ["18px", "28px"], fontWeight: "bold" }}
      >
        What we do
      </Text>
      <Box sx={{ marginBottom: "12px" }}>
        <Text
          color="primary"
          fontFamily={"primary"}
          sx={{
            fontSize: ["24px", "42px"],
            fontWeight: "bold",
            lineHeight: "1",
          }}
        >
          Our work is divided into
        </Text>
        <Text
          color="primary"
          fontFamily={"primary"}
          sx={{
            fontSize: ["24px", "42px"],
            fontWeight: "bold",
            lineHeight: "1",
          }}
        >
          4 core objectives
        </Text>
      </Box>
      <Grid
        sx={{
          gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
          gap: ["12px", "24px"],
          width: ["100%", "100%", "80%"],
          margin: "48px auto",
        }}
      >
        {whatBeDo.map((card) => {
          return (
            <Grid
              sx={{
                gridTemplateColumns: ["1fr", "1fr", "1fr 4fr"],
                gap: ["12px", "24px"],
                // border: "1px solid black",
                padding: ["24px", "64px 48px"],
                background: "white",
                boxShadow: "0 5px 14px 0 rgba(8, 15, 52, 0.04)",
                borderRadius: "24px",
              }}
            >
              <Image
                src={card.icon}
                alt={card.text}
                sx={{
                  height: ["80px", "120px"],
                  minWidth: ["80px", "120px"],
                }}
              />
              <Box
                sx={{
                  border: "1px solid red",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <Text
                  sx={{
                    fontFamily: "primary",
                    color: "primary",
                    fontSize: ["24px", "36px"],
                    lineHeight: 1,
                    fontWeight: "600",
                  }}
                >
                  {card.title}
                </Text>
                <Text
                  sx={{
                    color: "senary",
                    fontSize: ["14px", "18px"],
                    lineHeight: 1.2,
                  }}
                >
                  {card.text}
                </Text>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default WhatBeDo;
