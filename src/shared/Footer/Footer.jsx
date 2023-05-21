import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <div className="footer__logo">
              <img src="https://w7.pngwing.com/pngs/933/435/png-transparent-sydney-education-school-products-australia-student-sydney-text-logo-educational-toys.png" alt="Website Logo" />
              <h6>Educational Toys</h6>
            </div>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="footer__menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/toys">All Toys</Link>
              </li>
              <li>
                <Link to="/mytoys">My Toys</Link>
              </li>
              <li>
                <Link to="/addtoy">Add A Toy</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Dhaka,Uttora</p>
            <p>Phone: 01793534981</p>
            <p>Email: jabedhasan231@gmail.com</p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="social-icons">
              <li>
                <a href="https://facebook.com/educationaltoys">
                  <FaFacebook></FaFacebook>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/educationaltoys">
                  <FaTwitter></FaTwitter>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/educationaltoys">
                  <FaInstagram></FaInstagram>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer__bottom">
        <Container>
          <Row>
            <Col>
              <p>&copy; {new Date().getFullYear()} Educational Toys. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
