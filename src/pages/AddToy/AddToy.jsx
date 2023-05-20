import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { authContext } from '../../providers/authprovider/AuthProvider';

const AddToy = () => {

  const [toyData, setToyData] = useState([]);

  const {user}=useContext(authContext)


  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then(response => response.json())
      .then(data => setToyData(data))
      .catch(error => console.log(error));
  }, []);

  // show the subcategories in the dropdown
  const subcategories = [...new Set(toyData.map(toy => toy.subcategory))];

  // remove the empty subcategories
  subcategories.splice(subcategories.indexOf(''), 1);


  console.log(subcategories);
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
    <Form  onSubmit={handleSubmit}>
      <Form.Group  controlId="name">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name" />
      </Form.Group>
      <Form.Group controlId="sellerName">
        <Form.Label>Seller Name:</Form.Label>
        <Form.Control type="text" name="sellerName" defaultValue={user?.name} />
      </Form.Group>
      <Form.Group controlId="sellerEmail">
        <Form.Label>Seller Email:</Form.Label>
        <Form.Control type="email" name="sellerEmail" defaultValue={user?.email} />
      </Form.Group>
      <Form.Group controlId="subcategory">
        <Form.Label>Subcategory:</Form.Label>
        <Form.Control as="select" name="subcategory">
          {subcategories.map(subcategory => (
            <option key={subcategory}>{subcategory}</option>
          ))}
        </Form.Control>
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