import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import FAQ from "./components/FAQ";


function App() {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
