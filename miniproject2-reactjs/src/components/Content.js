import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import adobo from './Images/adobo.jpg';
// import sinigang from './Images/Sinigang.jpg';
import papaitan from './Images/papaitan.jpg';

const Content = () => {
    return (
        <div>
        <div>
        <h1 className='title d-flex justify-content-center' style={{fontSize:40}}>TOP SEARCH</h1>
        </div>
    <Container>       
        <Row>
        <Col xs={6} md={3}>
        <a href='https://google.com' rel="noreferrer">
            <Image className="rounded-4" src={adobo} thumbnail/>
        </a>
        </Col>
        <Col xs={6} md={3}>
            <a href='https://google.com' rel="noreferrer">
            <Image className="rounded-4" src={papaitan} thumbnail/>
            </a>
        </Col>
        <Col xs={6} md={3}>
            <Image className="rounded-4" src={adobo} thumbnail/>
        </Col>
        <Col xs={6} md={3}>
            <Image className="rounded-4" src={papaitan} thumbnail/>
        </Col>
        </Row>
        <br />
        <Row>
        <Col xs={6} md={3}>
            <Image className="rounded-4" src={adobo} thumbnail/>
        </Col>
        <Col xs={6} md={3}>
            <Image className="rounded-4" src={papaitan} thumbnail/>
        </Col>
        <Col xs={6} md={3}>
            <Image className="rounded-4" src={adobo} thumbnail/>
        </Col>
        <Col xs={6} md={3}>
            <Image className="rounded-4" src={papaitan} thumbnail/>
        </Col>
        </Row>
    </Container>
    </div>
    );
}

export default Content;