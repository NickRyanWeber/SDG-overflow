// So this wasn't easy to make a functional component.
// I left all the comments in incase we need some of this stuff later, but it was breaking everything

import React from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './NavMenu.css'
import logo from '../images/SDGOverFlowLogo.svg'

const NavMenu = () => {
  // const displayName = NavMenu.name

  // constructor(props) {
  //   super(props)

  //   this.toggleNavbar = this.toggleNavbar.bind(this)
  //   this.state = {
  //     collapsed: true
  //   }
  // }

  // toggleNavbar() {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   })
  // }
  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            <img className="sdg-nav-logo" src={logo} alt="SDG Logo" />
          </NavbarBrand>
          {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" /> */}
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            // isOpen={!this.state.collapsed}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <input
                  className="search-bar"
                  type="text"
                  placeholder="Search..."
                />
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/q/:qId">
                  Ask Question
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/login">
                  Log in
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/new-user">
                  Sign up
                </NavLink>
              </NavItem>
              {/* <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">
                    Counter
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">
                    Fetch data
                  </NavLink>
                </NavItem> */}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavMenu

// BREAK

// import React, { Component } from 'react'

// export class NavMenu extends Component {

// render() {
//   return (

//   )
// }
// }
