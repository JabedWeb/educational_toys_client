import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row className=' d-flex align-items-center'>
          <Col data-aos-duration="600" data-aos="fade-right" data-aos-easing="ease-in-sine" md={6}>
            <h1 className="banner-title">Unleash Imagination, Learning, and Fun</h1>
            <p className="banner-description">Welcome to Educational Toys Hub, your ultimate destination for discovering the perfect toys that inspire learning and ignite young minds. With a carefully curated selection of educational toys, we are dedicated to providing children with the tools they need to explore, create, and grow.</p>
            <Link className="text-decoration-none" style={{backgroundColor : "#617A55",color:"#fff",borderRadius:"4px" ,padding:"12px 30px" , margin: "10px 0px"}} to={'/toys'}>Explore Toys</Link>
          </Col>
          <Col md={6}>
            <img data-aos-duration="600" data-aos="fade-left" src="https://img.freepik.com/free-vector/hand-drawn-flat-christmas-toys-collection_23-2149134654.jpg?size=626&ext=jpg" alt="Banner" className="banner-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
