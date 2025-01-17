import React from 'react'
import './MainContent.css'

//IMPORTAR IMAGENES
import primerIMG from './img/moderador.png';
import segundaIMG from './img/consejo.png';
import tercerIMG from './img/estudiante.png';
import recursos from './img/recursos.png';

//Importar Componentes
import Register from '../Registro/Register';
import Footer from '../Footer/Footer';



const MainContent = () => {
   
  return (
    <div className='principal'>
      <div className='photo'>
        <div className='titulo-container'>
        <h1 className='titulo'>Catálogo de Estadías UTXJ maintContent</h1>
        </div>
      </div>

      {/*Tambien puedes encontrar*/}
      <div className='consejos'>
      <div className='tarjeta'>
        <img src={primerIMG} alt='Descripción de la imagen 1' className='imagen' />
        
        <h2 className='titulo-tarjeta'>Estadías</h2>
        <p className='descripcion'>Encuentra las empresas que tienen convenio vigente con la universidad UTXJ las cuales están dispuestas a ofrecer su espacio de trabajo para desarrollar tus prácticas profesionales</p>
      </div>
      
      <div className='tarjeta'>
        <img src={segundaIMG} alt='Descripción de la imagen 2' className='imagen' />
        <h2 className='titulo-tarjeta'>Consejos</h2>
        <p className='descripcion'>Encuentra consejos y tips para tu insercción en el mundo laboral</p>
      </div>
      
      <div className='tarjeta'>
        <img src={tercerIMG} alt='Descripción de la imagen 3' className='imagen' />
        <h2 className='titulo-tarjeta'>Empresas</h2>
        <p className='descripcion'>También encontraras información de instituciones o publicas o privadas que no tienen convenio con la universidad para el procesos de estadía, pero que aceptan propuestas de trabajo</p>
      </div>
      </div>

    {/*TESTIMONIOS */}
    <div className='testimonios'>
      {/*Testimonio UNO */}
      <div className='tarjetaUnoTestimonios'>
        <img src={tercerIMG} alt='llala' className='testimonioIMG'/>
        <div className='information'>
          <h2 className='tituloDescripcion'>Ricardo Castillo</h2>
          <p className='descripcion'>Hi, there woow my expirience in my first company was incredible, so here I found the begining for one of the greats ways I never found before, school UTXJ offers you a the oportunity to get into a good company all en an easy way</p>
        </div>
      </div>
      {/**TESTIMONIO DOS */}
      <div className='tarjetaUnoTestimoniosDos'>
        <img src={recursos} alt='llala' className='testimonioIMGdos'/>
        <div className='informationDos'>
          <h2 className='tituloDescripcionDos'>Ricardo Castillo</h2>
          <p className='descripcionDos'>Hi, there woow my expirience in my first company was incredible, so here I found the begining for one of the greats ways I never found before, school UTXJ offers you a the oportunity to get into a good company all en an easy way</p>
        </div>
      </div>
      
    </div>
    <Footer/>

    </div>
  )
}

export default MainContent
