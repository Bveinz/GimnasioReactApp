import {useState} from 'react';
import {MAGIC_WORD} from '../const/clave';
import {useAuthContext} from '../contexts/authContext';
import Navbar from '../components/pages/Navbar';
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { REGISTRO } from '../config/routes';

function Login() {
  
  const {login} = useAuthContext();
  const [magicWord, setMagicWord] = useState('');

  function handleInputChange(event) {
    setMagicWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (magicWord === MAGIC_WORD) {
      login();
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
          <div class="container">
            <div class="row justify-content-center align-items-center g-2">
              
              <div class="col">
              </div>
              
              <div class="col">
                <h1 className='mt-3 mb-5'>Formulario Ingreso</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                  <Form.Control value={magicWord} onChange={handleInputChange} type="text" placeholder="Ingrese Su Nombre"/>
                        <Form.Text className="text-muted">
                        Nombre de Usuario
                        </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Constraseña</Form.Label>
                    <Form.Control type="password" placeholder="contraseña" />
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={Login}>
                    Ingresar
                  </Button>

                  <Button variant="dark" type="submit" className='m-1'>
                    <Link to= {REGISTRO}>Registrarme</Link>
                  </Button>

              </div>
              <div class="col">

              </div>
            </div>
          </div>
</Form>
  );
}

export default Login;
