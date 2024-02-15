import React from "react";
import AvatarMe from './Me-Avatar.css'
import Me from '../img/Me-Avatar.jpg';
import { Figure } from 'react-bootstrap';

export default function AboutMe() {
    return (
        <div id='aboutMe' className='container-fluid bg-dark d-flex flex-wrap align-items-center justify-content-around pb-3'>
        <div className='row m-3'>
        <div className="text-center">
        <h3 className='fs-2'>Sobre Mi</h3>
        </div>
        <div class="col-6 col-md-3"></div>

        <div className="text-start col-md-4">
            
            <div className='mt-4 text-left' >
                <p>
                    ¡Hola! Mi Nombre es Tobias Moschino Molina, pero en internet me conocen por mi nickname "Zen". 
                    Empecé a manejar una computadora cuando tenía 6 años, por lo tanto me siento completamente un internauta 🚀 más!
                </p>
                
                <p>
                    Mi primer acercamiento a la programación fue cuando tenía 15 años y decidí subir mi primera página web,
                    Era de VideoJuegos y consiguió una cierta cantidad de tráfico que para mí, en aquel momento, me sorprendió. Había logrado 
                    tener personas a toda hora del día visitando mi página y utilizando el foro.
                </p>

                <p>
                    Algunos de mis éxitos en mi hasta el momento corta carrera profesional, fue crear soluciones tecnológicas 
                    para las necesidades de familiares allegados y amigos. ¡Y por sobre todo divertirme codificando!
                </p>
            </div>
        </div>
        <div className="text-center col-md-3">
        <Figure
            style={{
                width: '25rem',
                overflow: 'hidden', // Añadido para asegurar que no haya desbordamiento
            }}
            className="zoom-on-hover"
        >
            <Figure.Image
                width={270}
                height={180}
                alt='Me-Avatar'
                src={Me}
                className='rounded-circle img-fluid shadow'
            />
        </Figure>
        </div>
        <div class="col-6 col-md-1"></div>
    </div>
</div>

    );


}

