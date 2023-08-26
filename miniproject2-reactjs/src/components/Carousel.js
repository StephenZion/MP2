import Carousel from 'react-bootstrap/Carousel';
import adoboImage from './Images/adobo.jpg'
import sinigangImage from './Images/Sinigang.jpg'
import papaitanImage from './Images/papaitan.jpg'

function Carousel1() {
    return (
    <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <div className="d-flex justify-content-center">
        <img
            className=" caro d-block w-50"
            src={adoboImage}
            alt="First slide"
        />
        </div>
        <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex justify-content-center">
        <img
            className="caro d-block w-50"
            src={sinigangImage}
            alt="Second slide"
        />
        </div>
        <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex justify-content-center">
        <img
            className="caro d-block w-50"
            src={papaitanImage}
            alt="Third slide"
        />
        </div>
        <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default Carousel1;