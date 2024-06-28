import { Box, Divider, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import footerImage from "../assets/footerImage.svg";
import donateLogo from "../assets/donateLogo.svg";
import DonateBtn from './DonateBtn';

function Footer() {
  return (
    <Grid>
      <Image
        src={footerImage}
        alt="footerImage"
        sx={{ width: "100%", objectFit: "contain" }}
      />
      <Grid
        sx={{
          padding: ["24px", "48px 48px 64px 48px"],
          background: "septenary",
        }}
      >
        <Flex sx={{ justifyContent: "space-between",alignItems:'center',flexWrap:'wrap',gap:"24px" }}>
          <Box>
            <Image
              src={donateLogo}
              alt="donateLogo"
              sx={{ height: "36px", objectFit: "contain", margin: "12px 0" }}
            />{" "}
            <Text sx={{ color: "white", fontSize: ["14px", "18px"] }}>
              Help us reforest the Amazonia and bring back worlds heart.
            </Text>
          </Box>
          <Box>
            <DonateBtn />
          </Box>
        </Flex>
        <Divider sx={{ border: "1px solid grey", margin: "36px 0" }} />
        <Flex sx={{justifyContent:"space-between",alignItems:'center'}}>
          <Box sx={{ color: "white", fontSize: ["12px", "16px"] }}>
            Copyright © Donate X 2024. All rights reserved.
          </Box>
          <Box>
            <Text
              sx={{
                fontSize: ["12px", "16px"],
                color:"white"
              }}
            >
              Created By Ashish
            </Text>
          </Box>
        </Flex>
      </Grid>
    </Grid>
  );
}

export default Footer