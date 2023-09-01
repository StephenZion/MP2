import Carousel from 'react-bootstrap/Carousel';
import adoboImage from './Images/adobo.jpg'
import sinigangImage from './Images/Sinigang.jpg'
import papaitanImage from './Images/papaitan.jpg'
import kalderetaImage from './Images/Kaldereta.jpg'
import sisigImage from './Images/sisig.jpg'
import './Sample.css'

function Carousel1() {
    return (
    <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <div className="d-flex justify-content-center" onClick={() => window.location.href = 'https://www.google.com'} style={{cursor: 'pointer'}}>
        <img
            className=" caro d-block w-50"
            src={adoboImage}
            alt="First slide"
        />
        </div>
        <Carousel.Caption>
            <h5>ADOBONG MANOK</h5>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <div className="d-flex justify-content-center" onClick={() => window.location.href = 'https://www.google.com'} style={{cursor: 'pointer'}}>
        <img
            className="caro d-block w-50"
            src={sinigangImage}
            alt="Second slide"
        />
        </div>
        <Carousel.Caption>
            <h5>SINIGANG</h5>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <div className="d-flex justify-content-center" onClick={() => window.location.href = 'https://www.google.com'} style={{cursor: 'pointer'}}>
        <img
            className="caro d-block w-50"
            src={papaitanImage}
            alt="Third slide"
        />
        </div>
        <Carousel.Caption>
            <h5>PAPAITAN</h5>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <div className="d-flex justify-content-center" onClick={() => window.location.href = 'https://www.google.com'} style={{cursor: 'pointer'}}>
        <img
            className=" caro d-block w-50"
            src={kalderetaImage}
            alt="fourth slide"
        />
        </div>
        <Carousel.Caption>
            <h5>KALDERETA</h5>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <div className="d-flex justify-content-center" onClick={() => window.location.href = 'https://www.google.com'} style={{cursor: 'pointer'}}>
        <img
            className=" caro d-block w-50"
            src={sisigImage}
            alt="Fifth slide"
        />
        </div>
        <Carousel.Caption>
            <h5>SISIG</h5>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default Carousel1;