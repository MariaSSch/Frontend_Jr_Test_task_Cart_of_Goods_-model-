import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from "react-router";

import { addInCart } from '../../store/cartReducer';
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import cart from "./../../assets/cart_img.png";
import "./BtnInCart.css"

export default function BtnInCart({prod}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const prodsInCart = useSelector(state => state.cart.prodsCounter);
    const isProdInCart = prodsInCart.some(item => item.id === prod.id)
    
    const handleClick = (e) => {
        e.stopPropagation();
       dispatch(addInCart(prod));
    }

    const handleClickToCart = useCallback((e) => {
      e.stopPropagation();
      navigate("/app/cart");
    }, [navigate]);

  return (
    <Button className='in_cart' >
        {!isProdInCart ?
        <img
        onClick={handleClick}
        alt="cart"
        src={cart}
        className="cart"
        width="40"
        /> :
        <p className='cart_section' onClick={handleClickToCart}>In cart</p>
    }
</Button>

  )
}
