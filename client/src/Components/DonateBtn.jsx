import { Button } from "@chakra-ui/react";
import React from "react";

function DonateBtn({ isLarge }) {
  return (
    <Button
      sx={{
        background: "secondary",
        color: "white",
        borderRadius:isLarge ? "36px" : "24px",
        padding: isLarge ? ["36px 56px"] : ["14px 20px", "24px 36px"],
        width: "fit-content",
        margin: "auto",
        fontWeight: "bold",
        fontSize:isLarge ? "20px" : "16px",
        transition: "transform 0.2s ease-in-out",
        shadow: "primary",
        "&:hover": {
          background: "secondary",
          color: "white",
          transform: "scale(0.95)",
        },
      }}
    >
      Donate now
    </Button>
  );
}

export default DonateBtn;
