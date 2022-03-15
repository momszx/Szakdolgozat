import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Spinner, Table} from "react-bootstrap";
import parse from "html-react-parser"
import Comment from "../Comment";

class QuestionDetailsView extends Component {
    dateReplace(dateTime) {
        return dateTime.replace("T", " ");
    }
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
            minHeight: "700px"
        }
        let commentList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading && this.props.comment != []) {
            commentList = this.props.comment.map(strResult => (
                <Comment dateTime={strResult.dateTime} points={strResult.points} user={strResult.user}
                         text={strResult.text}/>
            ))
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        <Card className="text-center">
                            <Card.Header>
                                <Table>
                                    <tbody>
                                    <tr>
                                        <td>{this.props.question.points}</td>
                                        <td>{this.props.question.user}</td>
                                        <td>{this.props.question.name}</td>
                                        <td>{this.dateReplace(this.props.question.dateTime)}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {parse(this.props.question.text)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Card.Text>
                </Card>
                <Card style={style} className="text-center">
                    <Card.Text>
                        <Card.Body>
                            <Card.Text>
                                {commentList}
                            </Card.Text>
                        </Card.Body>
                    </Card.Text>
                </Card>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        question:state.comment.viewTopic,
        comment:state.comment.comment,
        loading:state.comment.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(QuestionDetailsView);
