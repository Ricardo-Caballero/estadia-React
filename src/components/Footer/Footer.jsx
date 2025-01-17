import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="social-media">
                <h4>Redes Sociales</h4>
                <a href="https://facebook.com/universidad" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook" aria-hidden="true"></i> Facebook
                </a>
                <a href="https://twitter.com/universidad" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter" aria-hidden="true"></i> Twitter
                </a>
                <a href="https://linkedin.com/universidad" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
                </a>
            </div>
            <div className="site-map">
                <h4>Mapa del Sitio</h4>
                <a href="/mapa">Ver Mapa</a>
            </div>
            <div className="policies">
                <h4>Políticas</h4>
                <a href="/politica-privacidad">Política de Privacidad</a>
                <a href="/terminos-uso">Términos de Uso</a>
            </div>
            <div className="resources">
                <h4>Recursos Adicionales</h4>
                <a href="/guia-usuario">Guía de Usuario</a>
                <a href="/faq">FAQs</a>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Universidad - Todos los derechos reservados</p>
            </div>
        </div>
    );
};

export default Footer;