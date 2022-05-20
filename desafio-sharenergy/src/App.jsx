import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/home/Home";
import ArticlePage from "./pages/article/Article";
import EventPage from "./pages/Event";
import LaunchPage from "./pages/Launch";

import Navbar from "./components/Navbar/Navbar";

import theme from "./theme";

function App() {
  return (
    <div className="app">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:id" element={<ArticlePage />} />
            <Route path="/articles/:id/events" element={<EventPage />} />
            <Route path="/articles/:id/launches" element={<LaunchPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
