import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Button} from 'react-bootstrap';
//import { useHistory } from 'react-router-dom';
import { authContext } from '../../providers/authprovider/AuthProvider';
import MyVerticallyCenteredModal from '../../components/Modal/MyVerticallyCenteredModal';

const MyToys = () => {
  const { user } = useContext(authContext);
  const [myToys, setMyToys] = useState([]);
  const [modalShow, setModalShow] = useState(false);
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
  }, [myToys]);

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

  return (
    <Container className='table-responsive'>
        <Table className='text-center' striped bordered >
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
                <Button className='m-1' variant="primary" onClick={() => setModalShow(true)}>
                    Update
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    toyid={toy._id}
                    toy={toy}
                    myToys={myToys}
                    setMyToys={setMyToys}
                    onHide={() => setModalShow(false)}
                />
                <Button className='m-1' variant="danger" onClick={() => handleDeleteToy(toy._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

  

    </Container>
  );
};

export default MyToys;

