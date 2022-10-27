import React from 'react'

const Table = () => {
  return (
    <div>

            <div class="container-fluid px-4">
                <div class="row g-3 my-2">
                    <div class="col-md-3 ">
                        <div class="p-3 bg-primary bg-gradient card-box-shadow d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 class="fs-2">55</h3>
                                <p class="fs-5">Productos</p>
                            </div>
                            <i class="fas fa-gift fs-1 border rounded-full bg-light p-3"></i>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="p-3 bg-danger bg-gradient card-box-shadow d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 class="fs-2">100</h3>
                                <p class="fs-5">Clientes</p>
                            </div>
                            <i
                                class="fas fa-hand-holding-usd fs-1 border rounded-full bg-light p-3"></i>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="p-3 bg-warning bg-gradient card-box-shadow d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 class="fs-2">777</h3>
                                <p class="fs-5">Envios</p>
                            </div>
                            <i class="fas fa-truck fs-1 border rounded-full bg-light p-3"></i>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="p-3 bg-info bg-gradient card-box-shadow d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 class="fs-2">%25</h3>
                                <p class="fs-5">Estadisticas</p>
                            </div>
                            <i class="fas fa-chart-line fs-1 border rounded-full bg-light p-3"></i>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Table