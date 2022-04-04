import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const { pathname } = useLocation()
    return (
        <div>
            <Navbar
                className='navbar p-3' collapseOnSelect expand="lg" variant="light" style={pathname.includes('blog') ? { display: 'none' } : { display: 'flex' }}>
                <Container >
                    <NavLink className='logo' to=''>Gift Corner</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='nav-item'>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/'
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/reviews'
                            >
                                Reviews
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/dashbroad'
                            >
                                Dashbroad
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to='/blog'
                            >
                                Blog
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;