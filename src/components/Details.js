import React, { Component } from 'react'
import {ProductConsumer} from './context'
import {Link} from 'react-router-dom'
import {Button2} from './Button'
export default class Details extends Component {
  render() {
    return (
     <ProductConsumer>
       {(value)=>{
        const {id,company,img,info,price,title,inCart}=value.detailProduct;
        return(
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto 
              text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title */}
            {/* product info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="product"/>
              </div>
              {/* product text */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h2>model:{title}</h2>
              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by:<span className="text-uppercase">
                {company}
              </span></h4>
              <h4 className="text-blue">
              <strong>Price:<span>$</span>
              {price}</strong></h4>
              <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product:
              </p>
              <p className="text-muted lead">{info}</p>
              {/* buttons */}
              <Link to='/'>
                <Button2>back to products</Button2>
              </Link>
              <Button2
              cart
               disabled={inCart?true:false}
              onClick={()=>{
                value.addToCart(id)
                value.openModal(id)
              }}>
                {inCart?'inCart':'add to cart'}
              </Button2>
              </div>
            </div>
          </div>
        )
       }}
       </ProductConsumer>
    )
  }
}
