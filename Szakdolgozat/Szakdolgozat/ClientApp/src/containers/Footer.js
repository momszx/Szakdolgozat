import React, {Component} from 'react';
import {connect} from 'react-redux';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class Footer extends Component {
    render() {
        return (
            <>
                <MDBFooter style={{background:"#09577f"}} className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="6">
                                <h5 className="title">Footer Content</h5>
                                <p>
                                    Here you can use rows and columns here to organize your footer
                                    content.
                                </p>
                            </MDBCol>
                            <MDBCol md="6">
                                <h5 className="title">Links</h5>
                                <ul>
                                    <li className="list-unstyled">
                                        <a href="https://github.com/momszx/Szakdolgozat">Dokumnetáció</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#!">Használati feltételek</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="https://uni-eszterhazy.hu/">Eszterházy Károly Katolikus Egyetem</a>
                                    </li>

                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a href="/"> Uni Hub </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Footer);
