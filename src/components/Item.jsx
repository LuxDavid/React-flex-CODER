import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {

  const navigate=useNavigate();

  const handleNavigate=()=>{
    navigate(`/item/${product.id}`);
  }

  return (
    <Card className='card' key={product.id}>
    <Card.Img className='card-img-top' variant="top" src={product.thumbnail} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        ${product.price}
      </Card.Text>
      <Button className='agregar' style={{ background: '#dc3545' }} onClick={handleNavigate}>Agregar al carrito</Button>
    </Card.Body>
  </Card>
  )
}

export default Item