import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Spinner, Table} from "react-bootstrap";
import parse from 'html-react-parser';
import Comment from "../Comment";
import ModalEditor from "../ModalEditor";
import AddEditor from "../AddEditor";

class NoteDetailsView extends Component {
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
                         text={strResult.text} action={(
                    <ModalEditor text={strResult.text} actionType={"ModComment"} topicId={this.props.note.id}
                              userId={strResult.userId} subjectId={""} name={""} id={strResult.id} uId={this.props.uid}
                              themeType={""}/>
                )}/>
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
                                        <td>{this.props.note.points}</td>
                                        <td>{this.props.note.user}</td>
                                        <td>{this.props.note.name}</td>
                                        <td>{this.dateReplace(this.props.note.dateTime)}</td>
                                        <td>
                                            <ModalEditor text={this.props.note.text} actionType={"ModComment"}
                                                      topicId={""}
                                                      userId={this.props.note.userId}
                                                      subjectId={this.props.note.subjectId} name={""}
                                                      id={this.props.note.id} uId={this.props.uid}
                                                      themeType={this.props.note.themeType}/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {parse(this.props.note.text)}
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
                                <AddEditor text={""} actionType={"AddComment"}
                                          topicId={this.props.note.id}
                                          userId={this.props.userId}
                                          subjectId={this.props.note.subjectId} name={""}
                                          id={""} uId={this.props.uid}
                                          themeType={""}/>
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
        note: state.comment.viewTopic,
        comment: state.comment.comment,
        loading: state.comment.loading,
        uid:state.user.uid,
        id:state.user.id
    };
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(NoteDetailsView);
