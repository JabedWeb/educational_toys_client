import React from 'react'
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'

const SingleToyPage = () => {
    const toy =useLoaderData();
    const {   
        _id,
        name,
        sellerName,
        sellerEmail,
        subcategory,
        price,
        rating,
        quantity,
        description,
        pictureUrl } =toy;
    console.log(toy);
  return (
    <Container>
        <h1>Toys Details</h1>

            <div className="toy_details d-flex justify-content-between align-items-center ">
                <div className="toy_details_info">
                    <h2>{name}</h2>
                    <p>Description: ${description}</p>
                    <p>Seller: {sellerName} ({sellerEmail})</p>
                    <p>Subcategory: {subcategory}</p>
                    <p>Price: ${price}</p>
                    <p>Rating: ${rating}</p>
                    <p>Quantity: ${quantity}</p>
                </div>
                <div style={{width:"700px"}} className="toy_details_image">
                    <img src={pictureUrl} alt={name} />
                </div>
            </div>


    </Container>
  )
}

export default SingleToyPage