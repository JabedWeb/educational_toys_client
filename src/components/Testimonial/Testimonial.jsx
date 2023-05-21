import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonial = () => {
  return (
        <Container className='py-3 my-5'>
            <Row>
              <Col>
                <div className="text-center ">
                  <h3>Testimonials</h3>
                  <h5 className='mt-3'> See What Our Client's Say About Our  Work.</h5>
                </div>
              </Col>
            </Row>
        
        <Row>
          <Col>
            <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <Row>
                    <Col>   
                    <div className="carusel-item text-center">
                    <span><FaQuoteLeft style={{fontSize: "40px",margin:"10px 0px", color : "#617a55"}}></FaQuoteLeft></span>
                    <p className="w-75 m-auto">I had an amazing experience with this company. Their service was top-notch, and the team was very professional and friendly</p>
                   <img style={{width : "70px",height:"70px",borderRadius:"100%",objectFit:"cover"}} src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg" alt=""/>
                    <h4>John Doe</h4>
                     <h6 className="text-muted">CEO, XYZ Corporation</h6>
                    
                     <div className="star-icon">
                      <ul className='d-flex justify-content-center list-unstyled'>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                      </ul>
                    </div>
                   </div>
                  </Col>
                  
                 
                  </Row>
                </div>
                <div className="carousel-item">
                  <Row>
                    <Col>   
                    <div className="carusel-item text-center">
                    <span><FaQuoteLeft style={{fontSize: "40px",margin:"10px 0px", color : "#617a55"}}></FaQuoteLeft></span>
                    <p className="w-75 m-auto">I highly recommend their product. It exceeded my expectations in every way. The quality and performance are outstanding</p>
                    <img style={{width : "70px",height:"70px",borderRadius:"100%",objectFit:"cover"}} src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg" alt=""/>
                    <h4>Jane Smith</h4>
                     <h6 className="text-muted">Marketing Manager, ABC Company</h6>
                    
                     <div className="star-icon">
                      <ul className='d-flex justify-content-center list-unstyled'>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                      </ul>
                    </div>
                   </div>
                  </Col>
                  
                 
                  </Row>
                </div>
                <div className="carousel-item">
                  <Row>
                    <Col>   
                    <div className="carusel-item text-center">
                    <span><FaQuoteLeft style={{fontSize: "40px",margin:"10px 0px", color : "#617a55"}}></FaQuoteLeft></span>
                    <p className="w-75 m-auto">I've been a customer for years, and their product has never disappointed. It has helped streamline our operations and improve efficiency.</p>
                    <img style={{width : "70px",height:"70px",borderRadius:"100%",objectFit:"cover"}} src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg" alt=""/>
                    <h4>Sarah Williams</h4>
                     <h6 className="text-muted">Director of Operations, ABC Corp</h6>
                    
                     <div className="star-icon">
                      <ul className='d-flex justify-content-center list-unstyled'>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                      </ul>
                    </div>
                   </div>
                  </Col>
                  
                 
                  </Row>
                </div>
                <div className="carousel-item">
                  <Row>
                    <Col>   
                    <div className="carusel-item text-center">
                    <span><FaQuoteLeft style={{fontSize: "40px",margin:"10px 0px", color : "#617a55"}}></FaQuoteLeft></span>
                    <p className="w-75 m-auto">The team provided excellent customer support throughout the entire process. They were responsive and went above and beyond to ensure our satisfaction</p>
                    <img style={{width : "70px",height:"70px",borderRadius:"100%",objectFit:"cover"}} src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg" alt=""/>
                    <h4>Micheal Shon</h4>
                     <h6 className="text-muted">Operations Manager, XYZ Corp</h6>
                    
                     <div className="star-icon">
                      <ul className='d-flex justify-content-center list-unstyled'>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                        <li><FaStar style={{color : "gold"}}></FaStar></li>
                      </ul>
                    </div>
                   </div>
                  </Col>
                  
                 
                  </Row>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span style={{color : "#617a55"}} className="carousel-control-prev-icon"><FaArrowLeft></FaArrowLeft></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span style={{color : "#617a55"}} className="carousel-control-next-icon"><FaArrowRight></FaArrowRight></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default Testimonial