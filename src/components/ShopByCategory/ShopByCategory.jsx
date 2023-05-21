import React, { useEffect, useState } from 'react';
import './ShopByCategory.css';
import { Col, Container, Row } from 'react-bootstrap';
import SingleToy from '../toys/SingleToy';

const ShopByCategory = () => {

    const [toyData, setToyData] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState('Language Toys');
  
    useEffect(() => {
      fetch('https://educational-toys-server-jabedweb.vercel.app/toys')
        .then(response => response.json())
        .then(data => setToyData(data))
        .catch(error => console.log(error));
    }, []);
  
    const subcategories = [...new Set(toyData.map(toy => toy.subcategory))];
    // console.log(subcategories);

    subcategories.splice(subcategories.indexOf(''), 1);
  
    const handleTabClick = subcategory => {
      setSelectedSubcategory(subcategory);
      console.log(subcategory);
    };
  
    const filteredToys = toyData.filter(toy =>
      selectedSubcategory ? toy.subcategory === selectedSubcategory : {}
    );


  return (
    <div data-aos-duration="600" data-aos="fade-right" data-aos-easing="ease-in-sine">
      <h3 className='text-center'>Our Best Category Toys</h3>
      <div className="tabContainer mt-5">
        {subcategories.map(subcategory => (
          <button
            key={subcategory}
            onClick={() => handleTabClick(subcategory)}
            className={selectedSubcategory === subcategory ? 'active' : ''}
          >
            {subcategory}
          </button>
        ))}
      </div>
      <div>
      <Container>
          <Row className='d-flex justify-content-center'>
            {
            filteredToys.map((toy) => {
                {
                    return (<Col key={toy.id} md={3}><SingleToy toys={toy} /></Col>)
                }
            })
            }
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ShopByCategory;
