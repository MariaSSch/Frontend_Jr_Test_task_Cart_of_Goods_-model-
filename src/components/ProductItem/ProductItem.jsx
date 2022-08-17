import React from 'react'
import { useNavigate} from "react-router";
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import BtnInCart from '../BtnInCart/BtnInCart';
import { setCurrentProd } from '../../store/currentProdReducer';

import "./ProductItem.css";

export default function ProductItem({prod}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = ()=> {
        dispatch(setCurrentProd(prod));
        navigate(`/app/${prod.id}`);
    }
  return (
        <Card style={{width: "14rem"}} className="product_card" border="light" onClick={handleClick}>
            <Card.Img variant='top' src={process.env.PUBLIC_URL + prod.image} className="card_img"/>
            <Container className='card_footer'>
                <Card.Body className='card_body'>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Subtitle>Brand {prod.brand}</Card.Subtitle>
                    <Card.Text>{prod.regular_price["currency"]}{prod.regular_price["value"]}</Card.Text>
                </Card.Body>

            <BtnInCart prod={prod}/>

            </Container>
        </Card>
     
  )
}

