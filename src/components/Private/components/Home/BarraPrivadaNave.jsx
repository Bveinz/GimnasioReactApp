import React from 'react'
import {LOGOUT, PRIVATECLI, PRIVATEHOME} from '../../../../config/routes';
import {Link} from 'react-router-dom';

const BarraPrivadaNave = () => {
  return (
    <div>
          {/* <div class="d-flex" id="wrapper"> */}
            <div class="card-box-shadow" id="sidebar-wrapper">

              <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">Sistema Reparto</div>
                
                <div class="list-group list-group-flush my-3 ">
                    
                    <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active card-box-shadow"><i class="fas fa-tachometer-alt me-2"> </i> Inicio </a>
                
                    <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold card-box-shadow"><i
                            class="fa fa-archive me-2">
                                {/* Aca Mandamos un crud de reparto */}
                                </i>Reparto</a>
                
                    <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold card-box-shadow"><i
                                class="fa fa-users me-2">
                                    {/* Cliente hacemos un link to a un crud de react */}
                                    
                                    </i> <Link to ={PRIVATECLI}> Clientes </Link> </a>
                
                    <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold card-box-shadow"><i
                            class="fa fa-cubes me-2"> 
                            {/* Estadisticas se hacen con libreria de js */}
                            </i> Estadisticas </a>
                    
                    <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold card-box-shadow"><i
                            
                            class = "fas fa-power-off me-2" > 
                            {/* SALIR DEBE CERRAR LA SESION */}
                            </i><Link to = {LOGOUT}>Salir</Link></a>
                </div>
              </div>
          {/* </div> */}

    </div>
  )
}

export default BarraPrivadaNave