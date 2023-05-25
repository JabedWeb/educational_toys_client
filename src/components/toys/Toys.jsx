import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import SingleToy from './SingleToy';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import './SingleToy.css'

const Toys = () => {
  const [toys, setToys] = useState([]);

  const [buttonShow,setButtonsShow]=useState('d-block')


  useEffect(() => {
    fetch('https://educational-toys-server-jabedweb.vercel.app/toys?limit=10')
      .then(response => response.json())
      .then(data => setToys(data))
      .catch(error => console.log(error));
  }, []);

  const handleViewAllToys=()=>{
    fetch('https://educational-toys-server-jabedweb.vercel.app/toys')
    .then(response => response.json())
    .then(data => {
      setToys(data);
      setButtonsShow('d-none')
    })
    .catch(error => {
      console.log(error);
    });
  }
  const setSortOrder = (event) => {
    //short circuiting
    let order;
    if(event.target.value === 'asc') {
      order = 'asc';
    } else if(event.target.value === 'desc') {
      order = 'desc';
    } else {
      return;
    }
    fetch(`https://educational-toys-server-jabedweb.vercel.app/toys?sort=price&order=${order}`)

      .then(response => response.json())
      .then(data => setToys(data))
      .catch(error => console.log(error));

  };



  const handleSearchInputChange = (e) => {
    console.log(e.target.value);
    fetch(`https://educational-toys-server-jabedweb.vercel.app/toys?search=${e.target.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setToys(data);
    })
    .catch(error => console.log(error));
  };

  return (
    <>
        <Container className='my-5'>
          <PageTitle title="Toys"></PageTitle>

          {
            toys && toys.length > 0 ? <Row>
            <h2 className='text-center mt-3 mb-3'>Explore Our All Toys</h2>
            <div className="sorting_search d-flex my-2 justify-content-between flex-wrap">
            <div>
            <h4>Sorting Depend On Price</h4>
            <select onChange={setSortOrder}>
              <option value="">Select</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
            <div>
            <h4>Toy Search</h4>
              <input type="text" onChange={handleSearchInputChange} placeholder="Search by toy name" />
            </div>
            </div>
            {
            toys.map((toy) => {
                {
                    return (<Col key={toy.id}  md={3}><SingleToy toys={toy} /></Col>)
                }
            })
            }
            <Button  style={{backgroundColor: "#617A55" ,borderRadius:"4px" , margin: "20px 0px"}} className={buttonShow} onClick={handleViewAllToys}>View More</Button>
          </Row> :  <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading... Please Wait For A While . Vercel Server Is Slow 😞 .
      </Button>
          }
        </Container>
    </>
  )
}
export default Toys