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
