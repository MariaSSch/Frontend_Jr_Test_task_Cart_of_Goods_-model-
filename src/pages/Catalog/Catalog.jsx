import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ThemeProvider} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/NavBar/Navbar';
import BrandRow from '../../components/BrandRow/BrandRow';
import ProductItem from '../../components/ProductItem/ProductItem';
import { sortByBrand, showAllBrands } from "../../store/cartReducer";

import "./Catalog.css"

export default function Catalog() {

    const dispatch = useDispatch();
   
    const {products, brands} = useSelector(({cart}) => ({
        products: cart.products,
        brands: cart.brands,
    }))
    
    const handleSort = (title) => {
        dispatch(sortByBrand(title))
    }

    const handleShowAll = () => {
        dispatch(showAllBrands());
    }

    return (
    <ThemeProvider>

        <NavBar />

        <Container className='catalog_container'>
            <BrandRow brands={brands} sortbybrand={handleSort} showallbrands={handleShowAll}/>
            <Container>
            <h3 className='catalog_title'>Catalog</h3>

            <Row xs={1} sm={2} md={2} lg={3} xl={4} xxl={4} className="all_prods_row">
                {products.map(prod => 
                    <Col key={prod.id} >
                        <ProductItem prod={prod} />
                    </Col>
                    )}
            </Row>
            </Container>
        </Container>

    </ThemeProvider>


  )
}

