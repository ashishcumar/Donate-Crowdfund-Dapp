import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Routes from "./routes/Routes.jsx";
import { theme } from "./helpers/theme.js";

const customTheme = extendTheme(theme);
console.log({ customTheme });

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={customTheme}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </ChakraProvider>
);

// hardhat contract address :- 0x5FbDB2315678afecb367f032d93F642f64180aa3
// after update artifact address :- 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
// 0x5FbDB2315678afecb367f032d93F642f64180aa3