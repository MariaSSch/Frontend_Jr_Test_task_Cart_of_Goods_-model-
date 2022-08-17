import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { delFromCart, incrProd, decrProd, changeProd} from '../../store/cartReducer';
import { ThemeProvider } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarLogo from "../../components/NavBarLogo/NavBarLogo";
import priceFormatter from "../../utils/priceFormatter";
import ProductInCart from "../../components/ProductInCart/ProductInCart";


import "./Cart.css"

export default function Cart() {

    const dispatch = useDispatch();

    const {prodsCounter, subtotal} = useSelector(({cart}) => ({
        prodsCounter: cart.prodsCounter,
        subtotal: cart.subtotal,
    }))

    const handleClickIncr = (id) => {
        dispatch(incrProd(id));
    }

    const handleClickDecr = (id)=> {
        dispatch(decrProd(id));
    }

    const handleOnChange = (id, value)=> {
        dispatch(changeProd(id, value))
    }
    const handleClickDel = (id) => {
        dispatch(delFromCart(id));
     }

  return (
    <ThemeProvider>
        <Navbar bg="light" >
            <Container style={{justifyContent: "center"}}>
                <NavBarLogo />
            </Container>
        </Navbar>
  
  
        <Container>
            <h3 className='cart_title'>Shopping Cart</h3>
            <Container>
                <Row className="tab_header">
                    <Col style={{flex: "3 0 0%"}}>Item</Col>
                    <Col >Price</Col>
                    <Col >Qty</Col>
                    <Col >Total</Col>
                </Row>

                {prodsCounter.length === 0 ? <p className="empty_cart">Your Cart is Empty</p> : 
                    <div>
                        {prodsCounter.map(prod => 
                            <ProductInCart key={prod.id} image={prod.image}
                                            brand={prod.brand} 
                                            title={prod.title} 
                                            currency={prod.currency} 
                                            price={prod.price} 
                                            count={prod.count} 
                                            id={prod.id} 
                                            total_price={prod.total_price}
                                            handleClickIncr={handleClickIncr}
                                            handleClickDecr={handleClickDecr} 
                                            handleOnChange={handleOnChange} 
                                            handleClickDel={handleClickDel}
                            />)}
                        <div className="subtotal">
                            <span className="subtotal_text">Subtotal:</span>
                            <span className="subtotal_price"> USD {priceFormatter.format(subtotal)}</span>
                        </div> 
                    </div>
                    }

            </Container>
        </Container>
        
    </ThemeProvider>
  )
}



