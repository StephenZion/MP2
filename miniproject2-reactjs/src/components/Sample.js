import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from 'react-icons/fa'
import './Sample.css';
import { useEffect, useState } from 'react';

function Sample() {
    useEffect(()=>{
        fetch('http://localhost:4000/search')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setFilterData(data);
        })
        .catch(err => console.log(err));
    },[])
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const handleFilter = (value) =>{
        const res = filterData.filter(f => f.name.toLowerCase().includes(value))
        setData(res);
        if(value === "") {
            setData([])
        }
    }

    const handleSearch = () => {
        // Implement your search logic here
        // For example, you can navigate to a search results page
        // or perform an AJAX request to fetch search results
        // This is just a placeholder function
        alert('Search button clicked');
    }

    return (
        <Container fluid>
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            >
            </Nav>
            <div className="d-flex justify-content-center">
            <Form className="d-flex col-8 p-2">
            <div className='search'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-1 "
                    aria-label="Search"
                    onChange={e => handleFilter(e.target.value)}
            /> 
                <div className='search-result' onClick={() => window.location.href = 'https://www.google.com'} style={{cursor:'pointer'}}>
                {data.map((d, i) => (
                    <div key={i}> 
                        {d.name}
                    </div>
                ))}
                
                </div>
            </div>
            <div>
            <Button className='Search1' variant="outline-primary" onClick={handleSearch} >
                <FaSearch/>
                </Button>
                </div>
            </Form>
            </div>
        </Container>
    );
}

export default Sample;