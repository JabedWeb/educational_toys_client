import React from 'react';
import './GallerySection.css';
import { Link } from 'react-router-dom';

const GallerySection = () => {
  // Sample data for gallery images
  const galleryImages = [
    { id: 1, src: 'https://img.freepik.com/free-vector/kids-toys-illustration_24908-57110.jpg?w=740&t=st=1684651316~exp=1684651916~hmac=48ca5102dd98c3fd562401c7908d3ca0b4b269c593c5792b34087cac090acb4a', alt: 'Abacus Toy' },
    { id: 2, src: 'https://img.freepik.com/free-psd/3d-illustration-children-s-toy-cubes-with-letters_23-2149345296.jpg?w=740&t=st=1684651308~exp=1684651908~hmac=262be31ca31ccc83acca0310ddf94aebff01f6519dd55807f8defcafbfdc9852', alt: 'Building Blocks Toy' },
    { id: 3, src: 'https://img.freepik.com/free-vector/shelf-box-full-toys-white-background_1308-40705.jpg?size=626&ext=jpg', alt: 'Science Experiment Kit' },
    { id: 4, src: 'https://img.freepik.com/free-psd/letters-wood-cubes-transparent-psd_7939-3428.jpg?size=626&ext=jpg', alt: 'Math Puzzle Toy' },
    { id: 5, src: 'https://img.freepik.com/free-vector/kids-toys-design_24908-56642.jpg?size=626&ext=jpg', alt: 'Language Learning Toy' },
    { id: 6, src: 'https://img.freepik.com/free-vector/flat-design-christmas-toys-collection_23-2148775126.jpg?size=626&ext=jpg', alt: 'Coding Robot Toy' },
    { id: 7, src: 'https://img.freepik.com/free-vector/hand-drawn-flat-christmas-toys-collection_23-2149134654.jpg?size=626&ext=jpg', alt: 'Solar System Model Toy' },
    { id: 8, src: 'https://img.freepik.com/free-vector/hand-drawn-christmas-toy-collection_23-2148767696.jpg?size=626&ext=jpg', alt: 'Geography Globe Toy' },
  ];
  

  return (
    <section data-aos-duration="600" data-aos="fade-left" data-aos-easing="ease-in-sine" className="gallery-section">
      <h3 className='text-center'>Our Gallery</h3>
      <div className="gallery-container my-4 mb-5">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="gallery-overlay">
              <div className="gallery-overlay-content">
                <h3>{image.alt}</h3>
                <Link className="text-decoration-none" style={{backgroundColor : "#617A55",color:"#fff",borderRadius:"4px" ,padding:"5px 10px" , margin: "10px 0px"}} to={'/toys'}>View All Toys</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
