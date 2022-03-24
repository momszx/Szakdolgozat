import React from 'react'
import {Button, Card, Table} from "react-bootstrap";
import parse from 'html-react-parser';
import Vote from "./Vote";
import Reactions from "./Reactions";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:this.props.text,
            user:this.props.user,
            points:this.props.points,
            dateTime:this.props.dateTime,
            action:this.props.action,
            userId:this.props.userId,
            conId:this.props.conId,
            uid:this.props.uid,
            value:this.props.value,
            reactionNumber:this.props.reactionNumber,
            radioValue:this.props.radioValue
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
                                <td>
                                    <Vote number={this.state.points} userId={this.state.userId}
                                          conId={this.state.conId} type={"Comment"} value={this.state.value} uid={this.state.uid}/>
                                </td>
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
                            <div className="d-flex flex-row-reverse">
                                <div className="p-2">
                                    <Reactions reactionNumber={this.state.reactionNumber}
                                               radioValue={this.state.radioValue}/>
                                </div>
                            </div>
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