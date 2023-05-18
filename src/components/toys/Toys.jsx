import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleToy from './SingleToy';
import { Col, Container, Row } from 'react-bootstrap';

const Toys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then(response => response.json())
      .then(data => setToys(data))
      .catch(error => console.log(error));
  }, []);
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
          </Row>
        </Container>
    </>
  )
}

export default Toys