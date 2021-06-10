import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button2 } from "./Button";
import { ProductConsumer } from "./context";
import { Logo } from "./assets/images/logo.js";
export default class NavBar extends Component {
  state = {
    isCollapsed: false,
  };
  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({ isCollapsed: true });
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        this.setState({ isCollapsed: true });
      } else {
        this.setState({ isCollapsed: false });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize");
  }
  showNavbar = (event) => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-md navbar-dark bg-dark  px-sm-5">
        <button
          onClick={this.showNavbar}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-light navbar-toggler-icon"></span>
        </button>
        <ProductConsumer>
          {(value) => (
            <>
              <Link to="/">
                <span className="navbar-brand mx-2">
                  <Logo />
                </span>
              </Link>
              {this.state.isCollapsed ? null : (
                <div
                  id="navbarTogglerDemo03"
                  className="collaplse navbar-collapse"
                >
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
                </div>
              )}
              <Link to="/cart" className="ml-auto">
                <Button2 className="button2">
                  <span className="mr-2">
                    <i className="fas fa-cart-plus fa-sm" />
                  </span>
                  My cart <span className="blue-bg">{value.cart.length}</span>
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
  .blue-bg {
    font-size: 12px;
    background: var(--lightBlue);
    border-radius: 50%;
    color: var(--mainDark);
    position: absolute;
    top: -8px;
    right: -6px;
    display: flex;
    justify-content: center;
    width: 20px;
    height: 20px;
  }
`;
