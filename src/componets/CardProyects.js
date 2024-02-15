import React, { useRef } from 'react';

export default function CardProyects(props) {
  let refImg = useRef();

  const handlerMouseOver = () => {
    refImg.current.style.opacity = "1";
    refImg.current.style.transform = "scale(1.1)";
  };

  const handlerMouseOut = () => {
    refImg.current.style.opacity = ".3";
    refImg.current.style.transform = "scale(1)";
  };

  return (
    <div
      className='card shadow mt-5'
      style={{ width: "18rem" }}
      onMouseOver={handlerMouseOver}
      onMouseOut={handlerMouseOut}
    >
      <figure className='card-img-top' style={{ height: "12rem", overflow: "hidden" }}>
        <img
          src={props.img}
          alt='proyecto'
          className='img-fluid'
          style={{ opacity: ".3", transition: ".3s linear" }}
          ref={refImg}
        ></img>
      </figure>
      <div className='card-body'>
        <h3 className='card-title'> Mi proyecto {props.number}</h3>
        <p className='card-text'>{props.text}</p>
        <a
          href={props.webLink}        
          target='_blank'
          className='btn btn-outline-success'
          rel='noopener noreferrer'
        >
        ver
        </a>
        <a
          href={props.githubLink}  // Aquí agregas la prop "githubLink" que debe contener la URL de tu repositorio en GitHub
          target='_blank'  
          rel='noopener noreferrer'
          className='md-4 btn btn-outline-success'
        >
          Código en GitHub
        </a>
      </div>
    </div>
  );
}

