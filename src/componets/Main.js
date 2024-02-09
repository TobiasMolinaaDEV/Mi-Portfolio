import React from "react";

export default function Main(props) {
  return (
    <main className='container d-flex' id="home" style={{height:"100vh"}}>
      <div className='container-fluid d-flex flex-row flex-wrap align-items-center justify-content-around'>
        <figure style={{width:"25rem"}}>
          <img
            src={props.frontMan}
            alt='front man'
            className='rounded img-fluid shadow'></img>
        </figure>
        <div style={{width:"30rem"}}>
          <h1 className='text-dark'>
            Mi nombre es Tobias y soy fullstack developper.
          </h1>
 
          <p className='text-secondary'>
            Apasionado <span className='text-info'>Full Stack Developer</span> comprometido con la excelencia técnica. Transformo ideas en soluciones robustas e innovadoras. 
            Construyo el futuro, <span className='text-success'>línea de código por línea de código</span>. 
          </p>
        </div>
      </div>
    </main>
  );
}
