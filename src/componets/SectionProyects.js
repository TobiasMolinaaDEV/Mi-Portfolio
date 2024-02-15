import React from "react";
import CardProyects from "./CardProyects";
import proyect1 from "./proyects/1.jpg";
import proyect2 from "./proyects/2.jpg";
import proyect3 from "./proyects/3.jpg";
import proyect4 from "./proyects/4.jpg";
import proyect5 from "./proyects/5.jpg";
import proyect6 from "./proyects/6.jpg";
import proyect7 from "./proyects/7.jpg";
import proyect8 from "./proyects/8.jpg";

export default function SectionProyects() {
  return (
    <section id='proyects' className='container-fluid bg-primary p-5'>
      <div className='row m-3'>
        <h3 className='text-center fs-2'>Proyectos</h3>
      </div>
      <div className='row d-flex flex-wrap justify-content-around'>
        <CardProyects key='1' img={proyect1} number={1} text="Esta es una prueba para ver como funciona la card" githubLink="https://github.com" webLink="https://www.youtube.com/shorts/Xxn2qGY1TJw" />
        <CardProyects key='2' img={proyect2} number={2} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
        <CardProyects key='3' img={proyect3} number={3} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
        <CardProyects key='4' img={proyect4} number={4} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
        <CardProyects key='5' img={proyect5} number={5} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
        <CardProyects key='6' img={proyect6} number={6} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
        <CardProyects key='7' img={proyect7} number={7} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
        <CardProyects key='8' img={proyect8} number={8} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
        <CardProyects key='9' img={proyect8} number={9} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
        <CardProyects key='10' img={proyect8} number={10} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
        <CardProyects key='11' img={proyect8} number={11} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
        <CardProyects key='12' img={proyect8} number={12} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, error."/>
      </div>
    </section>
  );
}
