import React from 'react'
import Card from "react-bootstrap/Card";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class MyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            name: this.props.name,
            click:this.props.click
        }
    }

    render() {
        const facultyListstyel = {
            display: "block",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80%",
            align: "central",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }
        return (
            <>
                <Card style={facultyListstyel} className="text-center">
                    <Card.Text>
                        <Table>
                            <tbody>
                            <tr>
                                <td>
                                    <Link to={this.state.url} onClick={this.state.click} >
                                        {this.state.name}
                                    </Link>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card>
            </>
        )
    }
}
export default MyCard