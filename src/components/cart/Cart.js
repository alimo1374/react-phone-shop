import React, { Component } from 'react'
import Title from '../Title'
import CartColums from './CartColums'
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../context'
import CartList from './CartList'
import CartTotals from './CartTotals' 
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value=>{
            const {cart} = value;
            if(cart.length > 0){
              return (
                <React.Fragment>
                  <Title name="your" title="cart"/>
                  <CartColums/>
                  <CartList value={value}/>
                  <CartTotals value={value}/>
                </React.Fragment>

              );
            }else{
              return(
                <EmptyCart/>
              )
              
              

            }
          }}
          </ProductConsumer>
      </section>
    )
  }
}