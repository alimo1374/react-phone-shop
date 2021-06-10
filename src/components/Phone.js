import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./context";
import PropTypes from "prop-types";
export default class Phone extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-sm-12 col-xs-12 col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <>
                <div
                  className="img-container p-5"
                  onClick={() => {
                    value.handleDetail(id);
                  }}
                >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                </div>

                <div className="card-footer d-flex justify-content-between">
                  <div>
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue font-italic mb-0">
                      <span className="mr-1">$</span>
                      {price}
                    </h5>
                  </div>
                  <div>
                    <button
                      className="cart-btn"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? (
                        <p className="text-capitalize mb-0" disabled>
                          incart
                        </p>
                      ) : (
                        <i className="fas fa-cart-plus" />
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}
Phone.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 1s linear;
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
