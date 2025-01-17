import React, { useState, useEffect } from 'react';
import './Catalogo.css';
import axios from 'axios';



const Catalogo = () => {

    const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAllEmpresas');
        setEmpresas(response.data);
      } catch (error) {
        console.error('Error fetching empresas:', error);
      }
    };

    fetchEmpresas();
  }, []);

  return (
    <div className='contieneCarusel'>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        {/* Carousel code remains unchanged */}
      </div>

      <div className='container'>
        <div className="row mt-3">
          {empresas.map((empresa) => (
            <div className="col-md-6 col-lg-4 col-xl-3" key={empresa.controlNumber}>
              <div className="card">
                <img className='card-img-top' src={empresa.logo} alt={empresa.nombre} />
                <div className="card-body">
                  <h5 className='card-title'>{empresa.nombre}</h5>
                  <h6 className='card-subtitle text-muted mb-2'>Descripción</h6>
                  <p className='card-text'>{empresa.descripcion}</p>
                  <h6 className='card-subtitle text-muted'>Requisitos</h6>
                  <p className='card-text'>{empresa.requisitos}</p>
                  <h6 className='card-subtitle text-muted'>Ofertas</h6>
                  <p className='card-text'>{empresa.ofertas}</p>
                  <a href='#' className='btn custom-btn'>Botón</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalogo
