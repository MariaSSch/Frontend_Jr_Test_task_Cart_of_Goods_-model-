import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import priceFormatter from '../../utils/priceFormatter';
import bin from "./../../assets/bin.png";


import "./ProductInCart.css"
import { Container } from 'react-bootstrap';

export default function ProductInCart({image, brand, title, currency, price, count, id, total_price, 
    handleClickIncr, handleClickDecr, handleOnChange, handleClickDel}) {


        return (
<Container>
    <Row className="item_row">
                            
        <Col  style={{flex: "3 0 0%"}} >
            <div className="item_to_buy">
                <img
                alt="prod"
                src={process.env.PUBLIC_URL + image}
                width="60"
                />
                <div>Brand {brand}/{title}</div>
            </div>
        </Col>

        <Col className="cart_col" expand="md">
            {currency}{price}
        </Col>

        <Col  className="cart_col" >
            <form id={id} className="quantity" onSubmit={(e)=> e.preventDefault()} >
                    <input 
                            type="number" 
                            value={count} 
                            name="count"
                            onChange={(e)=>handleOnChange(id, +e.target.value)} /> 
            
                
                <div className="change_qty">
                    <button onClick={()=>handleClickIncr(id)} >ᐱ</button>
                    <button onClick={()=>handleClickDecr(id)} >ᐯ</button>
                </div>
            </form>
        </Col>

        <Col  className="cart_col" >
            <div className="total">
                <div className="total_count">{currency} {priceFormatter.format(total_price)}</div>
                <div onClick={()=>handleClickDel(id)}>
                    <img
                    alt="bin"
                    src={bin}
                    width="24"
                    />
                </div>
            </div>
        </Col>
    </Row>
</Container>
)
  
}
