import React from 'react';

export default function HeaderNav(props) {
    return (
      <header>
        <nav className="navbar navbar-primary bg-primary navbar-expand-lg fixed-top">
          <div className="container">
            <img
              src={props.navBrand}
              alt="logo"
              className="navbar-brand"
              width="70px"
            />
            <button
              className="navbar-toggler me-3 btn-success btn-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ width: '50px' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item ms-3 btn-success rounded ">
                  <a href={props.home} className="nav-link text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item ms-3 btn-success rounded ">
                  <a href={props.proyects} className="nav-link text-white">
                    Proyectos
                  </a>
                </li>
                <li className="nav-item ms-3 btn-success rounded ">
                  <a href={props.contact} className="nav-link text-white">
                    Contactame
                  </a>
                </li>
                <li className="nav-item ms-3 btn-success rounded ">
                  <a href={props.aboutMe} className="nav-link text-white">
                    Sobre Mi
                  </a>
                </li>
                <li className="nav-item ms-3 btn-success rounded ">
                  <a href={props.skills} className="nav-link text-white">
                    Habilidades
                  </a>
                </li>
                <li className="nav-item ms-3 btn-success rounded ">
                  <a href={props.footer} className="nav-link text-white">
                    Footer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }