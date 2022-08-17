import React from 'react'
import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar/Navbar';

import ProductItem from '../../components/ProductItem/ProductItem'
import "./Product.css"

export default function Product() {
    const product = useSelector(state => state.currentProd)
  return (
    <>
    <NavBar />
    <ProductItem prod={product}/>
    </>
  )
}

