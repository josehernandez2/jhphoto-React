import React from 'react';
import {Nav, Navbar, NavbarToggler, NavbarBrand, Collapse,
  NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img src='images/logo.png' height="64" width="64"
                alt="logo" />
            </NavbarBrand>
            <NavbarToggler type="button"
              className="custom-toggler" onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/photos">
                    <span className="fa fa-camera-retro fa-lg"></span> Photos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <span className="fa fa-envelope fa-lg"></span> Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-id-card fa-lg"></span> About
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
