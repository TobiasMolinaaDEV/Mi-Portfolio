import React from "react";
import logo from "./img/LogoPortafolio.png";
import imgFrontMan from "./img/front-man.jpg";
import HeaderNav from "./componets/HeaderNav";
import SectionProyects from "./componets/SectionProyects";
import Main from "./componets/Main";
import SectionContact from "./componets/SectionContact";
import SectionSkills from"./componets/SectionSkills";
import AboutMe from"./componets/AboutMe";
import Footer from "./componets/Footer";

function App() {
  return (
    <>
      <HeaderNav
        navBrand={logo}
        home='#home'
        proyects='#proyects'
        contact='#contact'
        aboutMe='#aboutMe'
        skills='#skills'
        footer='#footer'
      />
      <Main frontMan={imgFrontMan} />
      <SectionProyects />
      <SectionContact/>
      <AboutMe/>
      <SectionSkills/>
      <Footer/>
    </>
  );
}

export default App;
