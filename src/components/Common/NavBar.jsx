import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { LOGIN } from '../../config/routes';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Gimnasio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/'>Inicio</Nav.Link>
            <Nav.Link href="#features">Informacion</Nav.Link>
            <Nav.Link href="#pricing">Planes</Nav.Link>
            
          </Nav>

          <Button className='bg-dark'> <Link to= {LOGIN}>Ingresar</Link></Button>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;