import { Link, useLocation } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <i className="fa fa-home"></i> Inicio
          </Link>
        </li>
        <li>
          <Link to="/catalogo" className={location.pathname === '/catalogo' ? 'active' : ''}>
            <i className="fa fa-building"></i> Catalogo
          </Link>
        </li>
        
        <li>
          <Link to="add-company" className={location.pathname === 'add-company' ? 'active' : ''}>
            <i className='fa fa-plus-circle'></i> agregar empresa
          </Link>
        </li>
        <li>
          <Link to="/company-list" className={location.pathname === '/company-list'? 'active' : ''}>
            <i className="fa fa-building"></i> Lista de Empresas
          </Link>
        </li>

        
      </ul>
    </nav>
  );
}

export default Navbar;