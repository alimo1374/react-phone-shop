import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button2 } from "./Button";
import { ProductConsumer } from "./context";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  px-sm-5">
        <ProductConsumer>
          {(value) => (
            <>
              <Link to="/">
                <span className="navbar-brand">Logo</span>
              </Link>
              <ul className="navbar-nav align-item-center">
                <li className="nav-item ml-5">
                  <Link to="/phone" className="nav-link">
                    Phone
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <Link to="/laptop" className="nav-link">
                    Laptop
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <Link to="/playstation" className="nav-link">
                    Playstation
                  </Link>
                </li>
              </ul>
              <Link to="/cart" className="ml-auto">
                <Button2 className="button2">
                  <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                  </span>
                  cart <span className="red-bg">{value.cart.length}</span>
                </Button2>
              </Link>
            </>
          )}
        </ProductConsumer>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainWhite);
  border-bottom: 1px solid var(--mainGray);
  .navlink {
    color: var(--mainBlue) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .button2 {
    position: relative;
  }
  .red-bg {
    font-size: smaller;
    background: var(--mainRed);
    border-radius: 50%;
    color: var(--mainWhite);
    position: absolute;
    bottom: 11px;
    left: -11px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }
`;
