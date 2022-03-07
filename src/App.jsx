import React from "react";
import Container from "@mui/material/Container";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Header } from "./Components/Header/Header.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Container fixed className="mt-20">
        <Header />
        <p className="text-3xl font-bold text-center mt-28">Notable Drops</p>
      </Container>
    </>
  );
}

export default App;
