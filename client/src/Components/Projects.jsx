import { Box, Divider, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import DonateBtn from "./DonateBtn";
import { projects } from "../helpers/jsonMapping";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Projects() {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 400;
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 400;
    }
  };

  return (
    <Grid
      sx={{
        border: "2px solid red",
        padding: ["24px", "64px 48px"],
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
      <Grid
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "60px",
            width: "60px",
            border: "1px solid red",
            position: "absolute",
            top: "50%",
            right: "0",
            background: "primary",
            display: "grid",
            placeContent: "center",
            borderRadius: "30px",
          }}
          onClick={handleScrollRight}
        >
          <ChevronRightIcon fontSize={"36px"} color={"white"} />
        </Box>
        <Box
          sx={{
            height: "60px",
            width: "60px",
            position: "absolute",
            background: "primary",
            top: "50%",
            left: "0",
            display: "grid",
            placeContent: "center",
            borderRadius: "30px",
          }}
          onClick={handleScrollLeft}
        >
          <ChevronLeftIcon fontSize={"36px"} color="white" />
        </Box>
        <Flex
          ref={scrollContainerRef}
          sx={{
            margin: "48px 0",
            overflow: "scroll",
            justifyContent: "left",
            gap: "48px",
            scrollBehavior: "smooth",
          }}
          className="projects-scroll"
        >
          {projects.map((card) => {
            return (
              <Box
                key={card.title}
                sx={{
                  minWidth: "350px",
                  // height: "420px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "primary",
                  margin: "12px 0",
                  // border: "1px solid #5c6a6aaa",
                  border: "1px solid red",
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
                  <Divider
                    sx={{
                      margin: ["12px 0", "16px 0"],
                      border: "0.5px solid grey",
                    }}
                  />
                </Box>

                <Grid
                  sx={{
                    gap: "12px",
                    gridTemplateColumns: "1fr 1fr",
                    marginBottom: "8px",
                  }}
                >
                  <Flex
                    sx={{
                      border: "1px solid red",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={card.treeIcon}
                      alt="tree"
                      sx={{ height: "32px", objectFit: "contain" }}
                    />
                    <Box>
                      <Text
                        sx={{
                          fontSize: ["18px", "24px"],
                          fontFamily: "primary",
                          fontWeight: "bold",
                          color: "primary",
                          lineHeight: 1,
                        }}
                      >
                        {card.treeCount}
                      </Text>
                      <Text
                        sx={{
                          color: "senary",
                          fontSize: ["14px", "18px"],
                          lineHeight: 1.2,
                        }}
                      >
                        Trees planted
                      </Text>
                    </Box>
                  </Flex>
                  <Flex
                    sx={{
                      border: "1px solid red",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={card.heartOutline}
                      alt="tree"
                      sx={{ height: "28px", objectFit: "contain" }}
                    />
                    <Box>
                      <Text
                        sx={{
                          fontSize: ["18px", "24px"],
                          fontFamily: "primary",
                          fontWeight: "bold",
                          color: "primary",
                          lineHeight: 1,
                        }}
                      >
                        {card.moneyRaised}
                      </Text>
                      <Text
                        sx={{
                          color: "senary",
                          fontSize: ["14px", "18px"],
                          lineHeight: 1,
                        }}
                      >
                        Raised money
                      </Text>
                    </Box>
                  </Flex>
                </Grid>
              </Box>
            );
          })}
        </Flex>
      </Grid>
      <Box sx={{ margin: "12px auto" }}>
        <DonateBtn isLarge />
      </Box>
    </Grid>
  );
}

export default Projects;
