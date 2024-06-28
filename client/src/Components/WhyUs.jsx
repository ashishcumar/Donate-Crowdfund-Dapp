import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import tick from "../assets/tick.svg";
import whyusBg from "../assets/whyusBg.jpeg";
import { whyUsImgPointer, whyUsPointer } from "../helpers/jsonMapping";

function WhyUs() {
  return (
    <Grid
      sx={{
        padding: ["24px", "48px"],
        background: "quaternary",
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
      }}
    >
      <Grid>
        <Text
          color="secondary"
          margin={"12px 0"}
          sx={{ fontSize: ["18px", "28px"], fontWeight: "bold" }}
        >
          Why Us
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
            We had been impulsing
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
            reforestation since 2006
          </Text>
        </Box>

        <Text
          sx={{
            fontSize: ["14px", "18px"],
            margin: ["8px 0 12px 0", "24px 0"],
            color: "senary",
            width: ["100%", "80%"],
          }}
        >
          Since 2006, we have been passionately driving the reforestation
          movement. Our commitment to restoring and preserving natural habitats
          spans over a decade, rooted in our belief that every tree planted
          today shapes a sustainable future for generations to come.
        </Text>

        <Box>
          {whyUsPointer.map((item) => {
            return (
              <Flex
                gap={"12px"}
                sx={{ marginBottom: "12px", alignItems: "center" }}
              >
                <img
                  src={tick}
                  alt="tick"
                  style={{
                    height: "24px",
                    width: "24px",
                    borderRadius: "50px",
                  }}
                />
                <Text
                  sx={{
                    fontSize: ["14px", "18px"],
                    color: "primary",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  {item}{" "}
                </Text>
              </Flex>
            );
          })}
        </Box>
      </Grid>
      <Grid
        sx={{
          border: "2px solid black",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: ["static", "relative"],
        }}
      >
        <Image
          src={whyusBg}
          alt="whyusBg"
          sx={{
            height: ["400px", "550px"],
            objectFit: "cover",
            borderRadius: "24px",
            margin: "auto",
          }}
        />
        <Box
          sx={{
            width: "fit-content",
            position: ["static", "absolute"],
            top: "40%",
            left: "-10%",
          }}
        >
          {
           whyUsImgPointer.map((cardData) => {
            return (
              <Grid
                sx={{
                  background: "white",
                  boxShadow: "primary",
                  padding: "24px",
                  //   border: "1px solid black",
                  gridTemplateColumns: "2fr 8fr",
                  placeContent: "center",
                  margin: "12px",
                  shadow: "primary",
                  borderRadius: "24px",
                  gap: "12px",
                }}
              >
                <Box sx={{ border: "1px solid black", margin: "auto" }}>
                  <img
                    src={cardData.icon}
                    alt="icon"
                    style={{
                      height: "48px",
                      width: "48px",
                      borderRadius: "50px",
                      margin: "auto",
                    }}
                  />
                </Box>
                <Box sx={{ display: "grid", alignItems: "center" }}>
                  <Text
                    sx={{
                      fontSize: ["24px", "28px"],
                      color: "primary",
                      fontWeight: "800",
                      fontFamily: "primary",
                      lineHeight: 1,
                    }}
                  >
                    {cardData.count}
                  </Text>
                  <Text
                    sx={{
                      fontSize: ["14px", "18px"],
                      color: "senary",
                      lineHeight: 1,
                    }}
                  >
                    {cardData.text}
                  </Text>
                </Box>
              </Grid>
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}

export default WhyUs;
