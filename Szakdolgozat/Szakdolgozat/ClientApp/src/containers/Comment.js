import React from 'react'
import {Button, Card, Table} from "react-bootstrap";
import parse from 'html-react-parser';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:this.props.text,
            user:this.props.user,
            points:this.props.points,
            dateTime:this.props.dateTime,
            action:this.props.action
        }
    }
    render() {
        const myStyle = {
            marginBottom:"20px"
        }
        return (
            <>
                <Card style={myStyle}>
                    <Card.Header className="text-center">
                        <Table>
                            <tbody>
                            <tr>
                                <td>{this.state.points}</td>
                                <td>{this.state.user}</td>
                                <td>{this.dateReplace(this.state.dateTime)}</td>
                                <td>{this.state.action}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {parse(this.state.text)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
    dateReplace(dateTime) {
        return dateTime.replace("T", " ");
    }
}
export default Comment