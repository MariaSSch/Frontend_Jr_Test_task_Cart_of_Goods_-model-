import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./BrandRow.css"

export default function BrandRow({brands, showallbrands, sortbybrand, list}) {
  return (
    <Row className="all_brands_row">
        <Col bg="light" >
            <p className='all_brands_title' onClick={showallbrands}>All brands</p>
            {brands.map(b => <p key={b.id} onClick={()=>sortbybrand(b.title)}>{b.title}</p>)}
        </Col>
    </Row>
  )
}

