import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image} from "react-bootstrap";
import UniHub from '../IMG/university-svgrepo-com.svg';
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        let def = (
            <>
                <Link to="/login" style={{color: "#ffffff"}}>Login</Link>
            </>
        )
        let logged = (<>
            Signed in as :
            <Link to="/login" style={{color: "#ffffff"}}>Username</Link>
        </>)
        if (this.props.username != "") {
            logged = (
                <>
                    Signed in as: <Link to="/login"
                                        style={{color: "#fcba03"}}>{this.props.username}</Link> Coins:{this.props.coin}
                </>
            )
        }
        return (
            <>
                <Navbar style={{background: "#09577f"}}>
                    <Container>
                        <Image src={UniHub} style={{width: "70px"}}>
                        </Image>
                        <div style={{width: "50px"}}></div>
                        <Navbar.Brand><Link to="/" style={{color: "#ffffff"}}>Uni Hub</Link></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/" style={{color: "#ffffff"}}>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/user" style={{color: "#ffffff"}}>User</Link></Nav.Link>
                            <Nav.Link><Link to="/permission" style={{color: "#ffffff"}}>Permission</Link></Nav.Link>
                        </Nav>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text style={{color: "#ffffff"}}>{this.props.username == "" ? def : logged}
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        username: state.user.username, coin: state.user.coin
    };
}

export default connect(
    mapStateToProps,
)(NavBar);
