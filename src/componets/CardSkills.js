import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Htmlsvg from './Skills-Images/html-svgrepo-com.svg'; 
import Csssvg from './Skills-Images/css-svgrepo-com.svg';
import Jssvg from './Skills-Images/js-official-svgrepo-com.svg';
import Reactsvg from './Skills-Images/reactjs-svgrepo-com.svg';
import Astrosvg from './Skills-Images/astro-svgrepo-com.svg';
import Tailwindsvg from './Skills-Images/tailwind-svgrepo-com.svg';
import MySQLsvg from './Skills-Images/mysql-svgrepo-com.svg';
import Awssvg from './Skills-Images/aws-svgrepo-com.svg';
import Nodesvg from './Skills-Images/node-svgrepo-com.svg';
import Pythonsvg from './Skills-Images/python-svgrepo-com.svg';
import Haskellsvg from './Skills-Images/haskell-svgrepo-com.svg';
import gitsvg from './Skills-Images/git-svgrepo-com.svg'; 
import vssvg from './Skills-Images/vscode2-svgrepo-com.svg';
import npmsvg from './Skills-Images/npm-svgrepo-com.svg'
import Drawiosvg from './Skills-Images/drawio-svgrepo-com.svg';



export default function CardSkills() {
    return (
      <section
        id='Skills'
        className='container-fluid  d-flex flex-wrap align-items-center justify-content-around pb-3'>
        <div  style={{ width: "19rem" }} className='card mt-3 '>
            <div className='card-head text-center mt-3 '><h5>Frontend</h5>
                <Card >
                    <Card.Body>
                        <Row>
                            <Col md={4} sm={6} xs={12}>
                                <Card.Img src={Htmlsvg} alt="Html SVG" className='img-fluid'/>
                                <p>Html</p>
                                <Card.Img src={Reactsvg} alt='React SVG'className='img-fluid'/>
                                <p>React</p>
                            </Col>
                            <Col md={4} sm={6} xs={12}>
                                <Card.Img src={Csssvg} alt="Css SVG" className='img-fluid'/>
                                <p>Css</p>
                                <Card.Img src={Tailwindsvg} alt='Tailwind SVG'className='img-fluid'/>
                                <p>Tailwind</p>
                            </Col>
                            <Col md={4} sm={6} xs={12}>
                                <Card.Img src={Jssvg} alt="Js SVG" className='img-fluid' />
                                <p>Javascript</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
          </div>
        </div>
        
        <div style={{  width: "19rem" }} className='card mt-3'>
            <div className='card-head text-center mt-3'><h5>Backend</h5>
            </div>
                <Card>
                    <Card.Body>
                            <Row>
                                <Col md={4} sm={6} xs={12}>
                                        <Card.Img src={MySQLsvg} alt="MySQL SVG" className='img-fluid'/>
                                        <p className='text-center'>MySQL</p>
                                </Col>
                                <Col md={4} sm={6} xs={12}>
                                        <Card.Img src={Awssvg} alt="Aws SVG"className='img-fluid' />
                                        <p className='text-center'>Aws</p>
                                </Col>
                                <Col md={4} sm={6} xs={12}>
                                        <Card.Img src={Nodesvg} alt="Node SVG" className='img-fluid' />
                                    <p className='text-center'>Node Js</p>
                                </Col>
                            </Row>
                    </Card.Body>
                </Card>               
        </div>

        <div style={{ width: "19rem" }} className='card mt-3'>
          <div className='card-head text-center mt-3'><h5>Aprendiendo </h5></div>
          <Card>
                <Card.Body>
                    <Row>
                        <Col md={4} sm={6} xs={12}>
                            <Card.Img src={Astrosvg} alt="Astro SVG" className='img-fluid'/>
                            <p className='text-center'>Astro</p>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <Card.Img src={Pythonsvg} alt="Python SVG" className='img-fluid'/>
                            <p className='text-center'>Python</p>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <Card.Img src={Haskellsvg} alt="Haskell SVG" className='img-fluid'/>
                            <p className='text-center'>Haskell</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>

        <div style={{ width: "19rem" }} className='card mt-3'>
          <div className='card-head text-center mt-3'><h5>Herramientas</h5></div>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={4} sm={6} xs={12}>
                                <Card.Img src={gitsvg} alt="Git SVG" className='img-fluid'/>
                                <p className='text-center'>Git</p>
                            </Col>
                            <Col md={4} sm={6} xs={12}>
                                <Card.Img src={vssvg} alt="Vs cod SVG" className='img-fluid'/>
                                <p className='text-center'>VSCode</p>
                            </Col>
                            <Col md={4} sm={6} xs={12}>
                                <Card.Img src={npmsvg} alt="npm SVG" className='img-fluid'/>
                                <p className='text-center'>npm</p>
                            </Col>
                            <Col md={4} sm={6} xs={12}>
                                <Card.Img src={Drawiosvg} alt="Drawio SVG" className='img-fluid' />
                                <p className='text-center'>Drawio</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
        </div>
      </section>
    );
}

