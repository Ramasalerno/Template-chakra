import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./screens/Landing1/Home";
import About from "./screens/Landing1/About";
import Contact from "./screens/Landing1/Contact";
import Services from "./screens/Landing1/Services";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./screens/Landing1/Login";

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  </BrowserRouter>
);
