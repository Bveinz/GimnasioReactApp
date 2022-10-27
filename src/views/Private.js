import {Link} from 'react-router-dom';
import {LOGOUT} from '../config/routes';
import Navbar from '../components/pages/Navbar';
import CompShowBlogs from '../components/clients/ShowCli';

function Private() {
  return (
    <div>
      <Navbar></Navbar>
      Mi ruta privada
      <Link to={LOGOUT}>Cerrar sesión</Link>
      <CompShowBlogs></CompShowBlogs>
    </div>
  );
}

export default Private;
