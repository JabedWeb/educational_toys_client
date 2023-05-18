import React, { useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const AddToy = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const pictureUrl = form.pictureUrl.value;
        const newToy = {
            name,
            sellerName,
            sellerEmail,
            subcategory,
            price,
            rating,
            quantity,
            description,
            pictureUrl
        }
        console.log(newToy);
        //send the data to the server
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
        })
    }
  return (
    <Container>
    <h2>Add Toy</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name" />
      </Form.Group>
      <Form.Group controlId="sellerName">
        <Form.Label>Seller Name:</Form.Label>
        <Form.Control type="text" name="sellerName" />
      </Form.Group>
      <Form.Group controlId="sellerEmail">
        <Form.Label>Seller Email:</Form.Label>
        <Form.Control type="email" name="sellerEmail" />
      </Form.Group>
      <Form.Group controlId="subcategory">
        <Form.Label>Subcategory:</Form.Label>
        <Form.Control type="text" name="subcategory" />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="number" name="price" />
      </Form.Group>
      <Form.Group controlId="rating">
        <Form.Label>Rating:</Form.Label>
        <Form.Control type="number" name="rating" />
      </Form.Group>
      <Form.Group controlId="quantity">
        <Form.Label>Quantity:</Form.Label>
        <Form.Control type="number" name="quantity" />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" name="description" />
      </Form.Group>
      <Form.Group controlId="pictureUrl">
        <Form.Label>Picture URL:</Form.Label>
        <Form.Control type="text" name="pictureUrl" />
      </Form.Group>
      <Button  className='my-3 mx-auto w-100' type="submit">Submit</Button>
    </Form>
  </Container>
  )
}

export default AddToy