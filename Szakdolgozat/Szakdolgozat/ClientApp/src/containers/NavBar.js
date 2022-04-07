import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Image} from "react-bootstrap";
import UniHub from '../IMG/university-svgrepo-com.svg';
import {Link} from "react-router-dom";
import * as actions from "../store/actions";
import {logout} from "../store/actions";

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
                    Be vagy jelentkezve mint: <Link to="/login"
                                                    style={{color: "#fcba03"}}>{this.props.username}</Link> Coins:{this.props.coin}
                    <Button variant="outline-danger" size="sm"
                            onClick={() => this.props.onLogin(this.props.id, this.props.uid)}>Kijelentkezés</Button>
                </>
            )
        }
        let permission = (<></>)
        if (this.props.permission == 2) {
            permission = (
                <Nav.Link><Link to="/permission" style={{color: "#ffffff"}}>Permission</Link></Nav.Link>
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
                            {permission}
                        </Nav>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text
                                style={{color: "#ffffff"}}>{this.props.username == "" ? def : logged}</Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );

    }
}

function mapStateToProps(state) {
    return {
        username: state.user.username,
        coin: state.user.coin,
        uid: state.user.uid,
        id: state.user.id,
        permission: state.user.permission,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (id, uid) => dispatch(actions.logout(id, uid))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(NavBar);
