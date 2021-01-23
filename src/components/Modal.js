import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "./context";
import { Button2 } from "./Button";
import { Link } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="
                            col-8 mx-auto col-md-6 col-lg-4
                             text-center text-capitalize p-5"
                    >
                      <h5>Item added to cart</h5>
                      <img className="img-fluid" src={img} alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: $ {price}</h5>
                      <div onClick={() => closeModal()}>
                        <Button2 cart>continue shopping</Button2>
                      </div>
                      <Link to="/cart" onClick={() => closeModal()}>
                        <Button2>go to cart</Button2>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
