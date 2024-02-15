import React from "react";

export default function SectionContact() {
  const handleDownloadCV = () => {
    // Ruta local al archivo PDF, ajusta esto según la ubicación de tu archivo
    const localPdfUrl = process.env.PUBLIC_URL + "./Tobiasmolindadev@gmail.com.pdf";

    
    // Crea un enlace temporal y simula el clic para descargar el PDF
    const link = document.createElement("a");
    link.href = localPdfUrl;
    link.download = "Tobiasmolindadev@gmail.com.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className='container-fluid p-5' id="contact">
      <div className='row'>
        {/* Tarjeta 1 */}
        <div className='card col-md-5 me-md-auto' >
          <div className='card-head pt-3 ps-3'>
            <h3 className="text-center">Contactarme</h3>
          </div>
          <div className='card-body'>
            <form>
              <div className='input-group mt-3 mb-3'>
                <span className='input-group-text'>
                  <i className="fas fa-male"></i>
                </span>
                <input
                  className='form-control'
                  type='text'
                  name='name'
                  placeholder='Insert name'
                  required
                />
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  placeholder='Insert email'
                  required
                />
              </div>
              <input type='submit' className='btn btn-success' />
            </form>
          </div>
        </div>

        <div className='card col-md-5 ms-md-auto mt-4'>
          <div className='card-head pt-3 ps-3'>
            <h3 className="text-center">Mi CV</h3>
          </div>

          <div className='card-body row justify-content-center'>
            {/* Cambié el tipo de input a "button" y agregué el evento onClick */}
            <input
              type='button'
              value='Descargar CV'
              className='btn btn-success card col-md-9 m-5 text-white'
              onClick={handleDownloadCV}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
