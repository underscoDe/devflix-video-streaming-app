import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import logo from '../assets/img/logo-devflix-transparent.png';


class LoginNavbar extends React.Component {
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Navbar className="fixed" bg="transparent" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="#home">
                                <img width="100px"
                                    height="80px"
                                    src={logo}
                                    alt=""
                                    style={{filter: 'brightness(0) invert(1)'}}/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="https://devflix-landing-page.vercel.app/">Portfolio</Nav.Link>
                                    <Nav.Link className="action px-4 ms-md-2 me-md-2" href="/register">Register</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginNavbar;