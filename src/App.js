import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/featuers/Features";
import Project from "./components/project/Project";
import Resume from "./components/Resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-xl mx-auto  ">
      <Navbar/> 
      <Banner/>
      <Features/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
      <FooterBottom/>
      </div>
      <div>
        
      </div>

    </div>
  );
}

export default App;
