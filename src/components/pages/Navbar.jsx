import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN } from '../../config/routes'

const Navbar = () => {
  
  
    return (
    <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/registro">Registrarme</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Noticias</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Eventos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">trix</a>
                    </li>
                </ul>
                
                {/* con una funcion debo validar token para cambiar de ingresar a salir */}
                 <button><Link to={LOGIN}>Ingresar</Link> </button>
                </div>
            </div>
            </nav>



    </div>
  )
}

export default Navbar