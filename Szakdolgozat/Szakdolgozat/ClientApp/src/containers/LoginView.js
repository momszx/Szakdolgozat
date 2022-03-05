import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";
import Login from "./Login";
import Resistration from "./Registration";

class LoginView extends Component {
    render() {
        const style = {
            display: "block",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80%",
            align: "central",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            minHeight:"700px"
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        <Table>
                            <tbody>
                            <tr>
                                <td>
                                    <Login></Login>
                                </td>
                                <td>
                                    <Resistration></Resistration>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(LoginView);
