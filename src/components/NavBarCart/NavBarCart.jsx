import React, { useCallback} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import cart from "./../../assets/cart_img.png";
import "./NavBarCart.css";

export default function NavBarCart() {

    const prodsInCart = useSelector(state => state.cart.prodsCounter);

    const navigate = useNavigate();

    const handleClickOnCart = useCallback(() => {
      navigate("/app/cart")
  }, [navigate]);

  return (
    <Navbar.Brand>
        <div className='cart_section' onClick={handleClickOnCart}>
            <div className='cart_count'>
                <img
                alt="cart"
                src={cart}
                className="cart"
                width="40"
                />
                <div className='count'>{prodsInCart.length}</div>
            </div>
        </div>
    </Navbar.Brand>
  )
}

