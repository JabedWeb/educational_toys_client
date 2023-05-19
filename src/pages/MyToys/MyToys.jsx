import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Button} from 'react-bootstrap';
//import { useHistory } from 'react-router-dom';
import { authContext } from '../../providers/authprovider/AuthProvider';

const MyToys = () => {
  const { user } = useContext(authContext);
  const [myToys, setMyToys] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedToy, setSelectedToy] = useState(null);
//   const [updateFormData, setUpdateFormData] = useState({
//     price: '',
//     quantity: '',
//     description: '',
//   });
//   const history = useHistory();

  const url = `http://localhost:5000/mytoys?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteToy = (toyId) => {
    const confirmed = window.confirm('Are you sure you want to delete this toy?');
    if (confirmed) {
      // Send request to delete the toy
      fetch(`http://localhost:5000/toys/${toyId}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Toy deleted successfully');
          // Update the toy list after deletion
          setMyToys(myToys.filter((toy) => toy._id !== toyId));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleUpdateToy = (toyId) => {
    const toyToUpdate = myToys.find((toy) => toy._id === toyId);
    // setSelectedToy(toyToUpdate);
    // setUpdateFormData({
    //   price: toyToUpdate.price,
    //   quantity: toyToUpdate.quantity,
    //   description: toyToUpdate.description,
    // });
    // setShowModal(true);
  };

//   const handleUpdateFormChange = (e) => {
//     setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
//   };

//   const handleUpdateFormSubmit = (e) => {
//     e.preventDefault();
//     const updatedToy = {
//       ...selectedToy,
//       price: updateFormData.price,
//       quantity: updateFormData.quantity,
//       description: updateFormData.description,
//     };

    // Send request to update the toy
//     fetch(`http://localhost:5000/toys/${selectedToy._id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedToy),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('Toy updated successfully');
//         // Update the toy in the toy list
//         setMyToys(myToys.map((toy) => (toy._id === selectedToy._id ? updatedToy : toy)));
//         handleCloseModal();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedToy(null);
//     setUpdateFormData({
//       price: '',
//       quantity: '',
//       description: '',
//     });
//   };

//   const handleAddToy = () => {
//     history.push('/add-toy');
//   };

  return (
    <Container>
            <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.name}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>{toy.description}</td>
              <td>
                <Button variant="info" onClick={() => handleUpdateToy(toy._id)}>
                  Update
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDeleteToy(toy._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Toy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateFormSubmit}>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={updateFormData.price}
                onChange={handleUpdateFormChange}
              />
            </Form.Group>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={updateFormData.quantity}
                onChange={handleUpdateFormChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={updateFormData.description}
                onChange={handleUpdateFormChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

    </Container>
  );
};

export default MyToys;

