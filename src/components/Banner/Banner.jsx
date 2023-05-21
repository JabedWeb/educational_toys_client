import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
      return (
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-psd/3d-illustration-children-s-toy-cubes-with-letters_23-2149345296.jpg?w=740&t=st=1684651308~exp=1684651908~hmac=262be31ca31ccc83acca0310ddf94aebff01f6519dd55807f8defcafbfdc9852"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/kids-toys-illustration_24908-57110.jpg?w=740&t=st=1684651316~exp=1684651916~hmac=48ca5102dd98c3fd562401c7908d3ca0b4b269c593c5792b34087cac090acb4a"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/baby-items-icon-set-with-toys-accessory-kids-cartoon-style_24797-2159.jpg?size=626&ext=jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Banner