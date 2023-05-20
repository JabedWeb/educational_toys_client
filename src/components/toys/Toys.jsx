import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import SingleToy from './SingleToy';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Toys = () => {
  const [toys, setToys] = useState([]);



  useEffect(() => {
    fetch('http://localhost:5000/toys?limit=10')
      .then(response => response.json())
      .then(data => setToys(data))
      .catch(error => console.log(error));
  }, []);

  const handleViewAllToys=()=>{
    fetch('http://localhost:5000/toys')
    .then(response => response.json())
    .then(data => {
      setToys(data);
    })
    .catch(error => {
      console.log(error);
    });
  }
  return (
    <>
        <Container>
          <Row>
            {
            toys.map((toy) => {
                {
                    return (<Col key={toy.id}  md={3}><SingleToy toys={toy} /></Col>)
                }
            })
            }
            <Button onClick={handleViewAllToys}>View More</Button>
          </Row>
        </Container>
    </>
  )
}

export default Toys