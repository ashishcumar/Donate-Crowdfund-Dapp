import { Grid } from "@chakra-ui/react";
import React from "react";
import LandingDonate from "../Components/LandingDonate";
import Footer from "../Components/Footer";
import DonationTable from "../Components/DonationTable";
import { useState } from "react";

function Donate() {
  const [donations, setDonations] = useState();
  return (
    <Grid>
      <LandingDonate setDonations={setDonations} />
      <DonationTable donations={donations} />
      <Footer />
    </Grid>
  );
}

export default Donate;
