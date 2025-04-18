import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ItemList = ({ products }) => {

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/item/${id}`);
  }

  return (
    <>
      {products.map((product) => (
        
        <Card className='card' key={product.id}>
          <Card.Img className='card-img-top' variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              ${product.price}
            </Card.Text>
            <Button className='add' style={{ background: '#dc3545' }} onClick={()=> handleNavigate(product.id)}>Agregar al carrito</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default ItemList