import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../css/header.css';
class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='menu'>
                <Navbar.Brand><Link to="/"><img src='assets/bookworm_icon.svg' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink><Link to="/" className='link-to'>Home</Link></NavLink>
                        <NavLink><Link to="/shop" className='link-to'>Shop</Link></NavLink>
                        <NavLink><Link to="/about" className='link-to'>About</Link></NavLink>
                        <NavLink><Link to="/cart" className='link-to'>Cart<Badge>100</Badge></Link></NavLink>
                        <NavLink><Link to="/sign-in" className='link-to'>Sign In</Link></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;