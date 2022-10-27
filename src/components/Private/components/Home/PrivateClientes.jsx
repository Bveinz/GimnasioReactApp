import React from 'react'
import BarraPrivadaNave from './BarraPrivadaNave'
import ShowCli from '../../../../components/clients/ShowCli'
import Perfil from './Perfil'

const PrivateClientes = () => {
  return (
    <div>
                  <div class="d-flex" id="wrapper">
                    
                    <BarraPrivadaNave></BarraPrivadaNave>
                        <div id="page-content-wrapper">
                            <Perfil></Perfil>
                            <ShowCli></ShowCli>
                        </div>
                  </div>


    </div>
  )
}

export default PrivateClientes