import React, { useEffect, useState } from 'react';
import './ShopByCategory.css';
import { Col, Container, Row } from 'react-bootstrap';
import SingleToy from '../toys/SingleToy';

const ShopByCategory = () => {

    const [toyData, setToyData] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:5000/toys')
        .then(response => response.json())
        .then(data => setToyData(data))
        .catch(error => console.log(error));
    }, []);
  
    const subcategories = [...new Set(toyData.map(toy => toy.subcategory))];
    console.log(subcategories);
  
    const handleTabClick = subcategory => {
      setSelectedSubcategory(subcategory);
    };
  
    const filteredToys = toyData.filter(toy =>
      selectedSubcategory ? toy.subcategory === selectedSubcategory : true
    );


  return (
    <div>
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
          <Row>
            {
            filteredToys.map((toy) => {
                {
                    return (<Col key={toy.id}  md={3}><SingleToy toys={toy} /></Col>)
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
