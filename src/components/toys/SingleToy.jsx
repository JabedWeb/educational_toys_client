import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleToy = ({ toys }) => {
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
    pictureUrl,
  } = toys;

  return (
    <Card>
      <Card.Img  variant="top" src={pictureUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Seller: {sellerName} ({sellerEmail})
        </Card.Text>
        <Card.Text>Subcategory: {subcategory}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Card.Text>Quantity: {quantity}</Card.Text>
        <Card.Text>Description: {description}</Card.Text>
        <Link to={`/toys/${_id}`}>View Details</Link>
      </Card.Body>
    </Card>
  );
};

export default SingleToy;
