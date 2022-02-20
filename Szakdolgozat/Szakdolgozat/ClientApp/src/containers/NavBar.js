import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image} from "react-bootstrap";
import UniHub from '../IMG/university-svgrepo-com.svg';

class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar  style={{background:"#09577f"}}>
                    <Container>
                        <Image src={UniHub} style={{width:"70px"}}>
                        </Image>
                        <div style={{width:"50px"}}></div>
                        <Navbar.Brand href="/" style={{color:"#ffffff"}}>Uni Hub</Navbar.Brand>
                        <Nav className="me-auto" >
                            <Nav.Link href="#home"style={{color:"#ffffff"}}>Home</Nav.Link>
                            <Nav.Link href="#features"style={{color:"#ffffff"}}>Features</Nav.Link>
                            <Nav.Link href="#pricing"style={{color:"#ffffff"}}>Pricing</Nav.Link>
                        </Nav>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text style={{color:"#ffffff"}}>
                                Signed in as: <a href="/login" style={{color:"#ffffff"}}>Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(NavBar);
