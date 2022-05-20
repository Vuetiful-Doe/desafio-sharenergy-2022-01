import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";

function App() {
  return (
    <div className="app">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {/* Home Page */}
            {/* Article Page */}
            {/* Event Page */}
            {/* Launch Page */}
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
