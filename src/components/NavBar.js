import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button2 } from "./Button";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  px-sm-5">
        <Link to="/">
          <span className="navbar-brand">Logo</span>
        </Link>
        <ul className="navbar-nav align-item-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Phone
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Laptop
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Playstation
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Button2>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </Button2>
        </Link>
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
`;
