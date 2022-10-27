import React from 'react'

const MenuDs = () => {
  return (
    <div>
        <div class="d-flex" id="wrapper">
            
            <div class="card-box-shadow" id="sidebar-wrapper">

                <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">Federico Santa Maria</div>
                
                <div class="list-group list-group-flush my-3 ">
                    
                    <a href="#" class="list-group-item list-group-item-action bg-transparent second-text active card-box-shadow"><i class="fas fa-tachometer-alt me-2"></i>Inicio</a>
                
                    <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold card-box-shadow"><i
                            class="fa fa-archive me-2"></i>Productos</a>
                
                    <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold card-box-shadow"><i
                                class="fa fa-users me-2"></i>Clientes</a>
                
                    <a href="#" class="list-group-item list-group-item-action bg-transparent second-text fw-bold card-box-shadow"><i
                            class="fa fa-cubes me-2"> </i> Reportes </a>
                    
                    <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold card-box-shadow"><i
                            class = "fas fa-power-off me-2"> </i>Salir</a>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuDs