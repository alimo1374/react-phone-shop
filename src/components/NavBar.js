import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo.svg'
import styled from 'styled-components'
import {Button2} from './Button'

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
            <img src={Logo} alt="store" className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-item-center">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">Products</Link>
            </li>
        </ul>
        <Link to="/cart" className="ml-auto">
            <Button2>
                <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                </span>
                my cart
            </Button2>
        </Link>
      </NavWrapper>
    )
  }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.navlink{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`

