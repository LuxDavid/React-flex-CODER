import React from 'react';
import { useGetItemImg } from '../firebase/database.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {


const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/item/${id}`);
  }

  const image= useGetItemImg(product.thumbnail);

  return (
    <>
     <Card className='card' key={product.id}>
          <Card.Img className='card-img-top' variant="top" src={image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              ${product.price}
            </Card.Text>
            <Button className='add' style={{ background: '#dc3545' }} onClick={()=> handleNavigate(product.id)}>Agregar al carrito</Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default Item