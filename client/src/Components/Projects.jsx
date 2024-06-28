import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

import DonateBtn from "./DonateBtn";
import { projects } from "../helpers/jsonMapping";

function Projects() {
  return (
    <Grid
      sx={{
        border: "2px solid red",
        padding: ["24px", "48px"],
      }}
    >
      <Text
        color="secondary"
        margin={"12px 0"}
        sx={{
          fontSize: ["18px", "28px"],
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Our projects
      </Text>
      <Box sx={{ marginBottom: "12px", textAlign: "center" }}>
        <Text
          color="primary"
          fontFamily={"primary"}
          sx={{
            fontSize: ["24px", "42px"],
            fontWeight: "bold",
            lineHeight: "1",
          }}
        >
          Take a look at our past
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
          successful projects
        </Text>
      </Box>
      <Flex
        sx={{
          margin: "48px 0",
          overflow: "scroll",
          justifyContent: "left",
          gap: "48px",
        }}
        className="projects-scroll"
      >
        {projects.map((card) => {
          return (
            <Box
              sx={{
                minWidth: "350px",
                height: "420px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "primary",
                margin: "12px 0",
                // border: "1px solid #5c6a6aaa",
              }}
            >
              <Image
                src={card.icon}
                alt={card.title}
                sx={{
                  width: "100%",
                  objectFit: "contain",
                }}
              />
              <Box sx={{ padding: "12px" }}>
                <Text
                  sx={{
                    color: "primary",
                    fontFamily: "primary",
                    fontWeight: "bold",
                    fontSize: ["18px", "24px"],
                    lineHeight: 1,
                    marginTop: "12px 0",
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
            </Box>
          );
        })}
      </Flex>
      <Box sx={{ margin: "12px auto" }}>
        <DonateBtn isLarge />
      </Box>
    </Grid>
  );
}

export default Projects;
