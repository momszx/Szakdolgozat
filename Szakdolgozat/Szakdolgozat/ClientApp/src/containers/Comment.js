import React from 'react'
import {Button, Card, Col, Container, Row, Table} from "react-bootstrap";
import parse from 'html-react-parser';
import Vote from "./Rection/Vote";
import Reactions from "./Rection/Reactions";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            user: this.props.user,
            points: this.props.points,
            dateTime: this.props.dateTime,
            action: this.props.action,
            userId: this.props.userId,
            conId: this.props.conId,
            uid: this.props.uid,
            value: this.props.value,
            reactionNumber: this.props.reactionNumber,
            radioValue: this.props.radioValue,
            voteId: this.props.voteId,
            reactionId: this.props.reactionId
        }
    }

    render() {
        const myStyle = {
            marginBottom: "20px"
        }
        console.log(this.state.radioValue)
        return (
            <>
                <Card style={myStyle}>
                    <Card.Header className="text-center">
                        <Container fluid>
                            <Row>
                                <Col xs={1}>
                                    <Vote number={this.state.points} userId={this.state.userId}
                                          conId={this.state.conId} type={"Comment"} value={this.state.value}
                                          uid={this.state.uid}
                                          id={this.state.voteId}/>
                                </Col>
                                <Col>
                                    {this.state.user}
                                </Col>
                                <Col>
                                    {this.dateReplace(this.state.dateTime)}
                                </Col>
                                <Col xs={1}>
                                    {this.state.action}
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {parse(this.state.text)}
                            <div className="d-flex flex-row-reverse">
                                <div className="p-2">
                                    <Reactions reactionNumber={this.state.reactionNumber}
                                               radionValue={this.state.radioValue}
                                               id={this.state.reactionId}
                                               userId={this.state.userId}
                                               conId={this.state.conId} type={"Comment"} value={this.state.value}
                                               uid={this.state.uid}
                                               id={this.state.voteId}/>
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