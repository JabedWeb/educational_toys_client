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
                    return (<Col  md={3}><SingleToy key={toy.id} toys={toy} /></Col>)
                }
            })
            }
          </Row>
        </Container>
    </>
  )
}

export default Toys