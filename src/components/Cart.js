import './style.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';


function Cart({filteredProducts, clickRemove, removeProd, addProd}){
  const [countPrices, setCountPrices] = useState([]);

  useEffect(()=>{
    setCountPrices(filteredProducts.reduce((acc, el)=>{
      return acc + (el.price*el.count);
    }, 0))
  }, [filteredProducts])
  

  return <div className={'cart p-4 text-black'}>
            <h2 className='text-decoration-underline'>YOUR PRODUCTS</h2>
            <ListGroup as="ol" numbered variant="flush">
                {filteredProducts.map(el => <ListGroup.Item className='text-start d-flex justify-content-end'>{el.brand} {el.model} ({el.price}UAH) <Badge onClick={()=> clickRemove(el.id)} className='mx-4' bg="danger">Remove</Badge>
          
                <Badge onClick={()=> addProd(el.id)} bg="success">+</Badge>
                <div className={'count-span d-inline-block border mx-2 rounded'}>{el.count}</div>
                <Badge onClick={()=> removeProd(el.id)} bg="warning">-</Badge>

              </ListGroup.Item>)}
            </ListGroup>
            <h3 className='mt-4 text-decoration-underline'>Total Price: {countPrices} UAH</h3>
        </div>
}

export default Cart;