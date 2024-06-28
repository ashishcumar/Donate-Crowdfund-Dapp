import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import landingBg from "../assets/donateLandingBg.jpg";
import donateLogo from "../assets/donateLogo.svg";
import DonateBtn from "./DonateBtn";
import donate100 from "../assets/donate100.png";
import donate500 from "../assets/donate500.png";
import donateCustom from "../assets/donateCustom.png";
import donate300 from "../assets/donate300.png";
import { useNavigate } from "react-router";
import ethereum from "../assets/ethereum.svg";

function LandingDonate() {
  const navigate = useNavigate();
  return (
    <Grid>
      <Grid
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          justifyContent: "space-between",
          placeContent: "flex-start",
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
            padding: ["24px", "64px 48px"],
            border: "1px solid red",
            justifyContent: "space-between",
            alignItems: "center",
            height: "fit-content",
          }}
        >
          <Image
            src={donateLogo}
            alt="logo"
            sx={{
              height: ["24px", "36px"],
              objectFit: "contain",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
          <Box sx={{ border: "2px solid red" }}>
            <DonateBtn />
          </Box>
        </Flex>
        <Grid
          sx={{
            border: "2px solid brown",
            padding: ["24px", "64px 48px"],
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
              Donate to
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
              reforest the world
            </Text>
          </Box>
          <Text
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: ["18px", "24px"],
              width: ["100%", "80%"],
              margin: "auto",
            }}
          >
            Your donation makes a significant impact on our planet. Help us
            plant trees, clean rivers, and support communities worldwide.
            Together, we're creating a greener, healthier Earth for all.
          </Text>
        </Grid>
      </Grid>
      <Grid
        sx={{
          minHeight: "100vh",
          width: "100%",
          background: "tertiary",
        }}
      >
        <Grid
          sx={{
            width: "80%",
            gridTemplateColumns: ['1fr',"repeat(2,1fr)"],
            gap: "24px",
            position: "absolute",
            top: "40%",
            left:0,
            right:0,
            margin: "auto",
            border:'1px solid red'
          }}
        >
          {[
            {
              money: "5 Eth",
              text: "Donate 5 Eth to support global reforestation efforts.",
              icon: donate100,
            },
            {
              money: "10 Eth",
              text: "Contribute 10 Eth to protect forests and biodiversity.",
              icon: donate300,
            },
            {
              money: "50 Eth",
              text: "Support our mission with a donation of 50 Eth.",
              icon: donate500,
            },
            {
              money: "Custom",
              text: "hoose your donation amount to help reforest the world.",
              icon: donateCustom,
            },
          ].map((card) => {
            return (
              <Box
                sx={{
                  background: "white",
                  boxShadow: "primary",
                  border: "1px solid black",
                  padding: "48px 24px 24px 24px",
                  borderRadius: "24px",
                  maxWidth: "400px",
                  display: "grid",
                  placeContent: "center",
                  margin:'auto'
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.money}
                  sx={{ height: "120px", objectFit: "contain", margin: "auto" }}
                />
                <Flex
                  sx={{
                    gap: "12px",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "12px 0",
                  }}
                >
                  <Image
                    src={ethereum}
                    alt="eth icon"
                    sx={{ height: "24px", objectFit: "contain" }}
                  />
                  <Text
                    sx={{
                      color: "primary",
                      fontSize: ["24px", "36px"],
                      fontWeight: "bold",
                      fontFamily: "primary",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    {card.money}{" "}
                  </Text>
                </Flex>
                <Text
                  sx={{
                    textAlign: "center",
                    fontSize: ["14px", "18px"],
                    lineHeight: 1.2,
                    color: "senary",
                  }}
                >
                  {" "}
                  {card.text}{" "}
                </Text>
                <Button
                  sx={{
                    background: "secondary",
                    color: "white",
                    borderRadius: "40px",
                    padding: ["32px 40px"],
                    width: "100%",
                    margin: " 24px auto",
                    fontWeight: "bold",
                    fontSize: "18px",
                    border: "1px solid black",
                    "&:hover": {
                      background: "secondary",
                    },
                  }}
                >
                  Donate now
                </Button>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingDonate;
