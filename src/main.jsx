import { BrowserRouter } from "react-router-dom"
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#0089BA",
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

export default theme
