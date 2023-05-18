import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleToy from './SingleToy';
import { Col, Container, Row } from 'react-bootstrap';

const Toys = () => {
   const toys= useLoaderData();
    console.log(toys);
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