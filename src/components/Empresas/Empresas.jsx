import React from 'react'
import './Empresas.css'
import xcaret from './img/xcaret.jpg'
import XCARET from './img/XCARET.png'

const Empresas = () => {
  return (
    <div className='xcaret'>
      <div className='imagen'>
        <h4>Imagen</h4>
        <div className='cuadro'>
            <img src={XCARET}></img>
        </div>
        <div className='lista'>
            <table>
                <tr>
                    <td>Restaurante tipo bufete</td>
                </tr>
                <tr>
                    <td>Transporte dentro de Playa del Carmen</td>
                </tr>
                <tr>
                    <td>Uniforme</td>
                </tr>
                <tr>
                    <td>Actividades culturales y deportivas</td>
                </tr>
                <tr>
                    <td>Descuentos en las tiendas del grupo</td>
                </tr>
            </table>
        </div>
      </div>

      <div className='information'>
        <h2 className='title'>Vive la Experiencia XCARET y Desarrolla tu Potencial Profesional</h2>

        <p className='texto'>
        ¿Te gustaría realizar tus prácticas en un lugar único que combina naturaleza, cultura y tecnología? **XCARET**, uno de los parques temáticos más reconocidos a nivel internacional, te ofrece una experiencia de aprendizaje inigualable en la que podrás aplicar tus conocimientos y habilidades en un ambiente lleno de aventura y respeto por el medio ambiente.        
        </p>
        <h3 className='question'>**¿Quiénes somos en XCARET?**</h3>

        <p className='texto'>
        Con más de 30 años de historia, XCARET es mucho más que un parque temático. Somos una organización comprometida con la conservación y la sustentabilidad, y nuestro objetivo es preservar y compartir la riqueza cultural y natural de México. Además, estamos a la vanguardia en el uso de tecnología para mejorar la experiencia de nuestros visitantes, lo que convierte a XCARET en un lugar ideal para que los estudiantes desarrollen sus habilidades en un entorno desafiante y enriquecedor.
        </p>
        <h3 className='question'>**Áreas de oportunidad en XCARET**</h3>
        <p className='texto'>
        Como practicante en XCARET, tendrás la oportunidad de trabajar en diversas áreas, desde **gestión de proyectos tecnológicos** hasta **manejo de redes y comunicación digital**, e incluso **desarrollo de contenidos multimedia**. Aquí, aprenderás de profesionales experimentados y podrás aplicar tus conocimientos en proyectos de gran alcance que impactan a millones de visitantes cada año.        </p>
        
      </div>
      <aside className='aside'>
        <h6>Aside</h6>
        <div className='comentario'>

        </div>
        <div className='comentario'>
            
        </div>
      </aside>
    </div>
  )
}

export default Empresas
