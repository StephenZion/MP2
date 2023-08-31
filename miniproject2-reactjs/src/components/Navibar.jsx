import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Sample.css';
import Logo from './Images/Logo.png'
// import { FaSearch } from 'react-icons/fa'


function NavScrollExample() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
        <Navbar.Brand href='Navibar.js'><img src={Logo} alt="Logo" height={50} width={50} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >           
            <Nav.Link className='navbar1 me-lg-5 ms-lg-5' href="#">PORK</Nav.Link>
            <Nav.Link className='navbar1 me-lg-5 ms-lg-5' href="#" >CHICKEN</Nav.Link>
            <Nav.Link className='navbar1 me-lg-5 ms-lg-5' href="#" >BEEF</Nav.Link>
            <Nav.Link className='navbar1 me-lg-5 ms-lg-5' href="#" >FISH</Nav.Link>

            </Nav> 
            <Form className="d-flex">
            <Button className='col-6 me-2 rounded-4' variant="outline-success">Sign in</Button>
            <Button className='Sample1 col-6 rounded-4' variant="outline-success">Register</Button>
            </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavScrollExample;