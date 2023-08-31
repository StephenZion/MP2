import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from 'react-icons/fa'
import './Sample.css';

function Sample() {
    return (
        <Container fluid>
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            >
            </Nav>
            <div className="d-flex justify-content-center">
            <Form className="d-flex col-8 p-2">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-1 "
                aria-label="Search"
            />
            <Button className='Search1' variant="outline-primary">
                <FaSearch/>
                </Button>
            </Form>
        </div>
        </Container>
    );
}

export default Sample;