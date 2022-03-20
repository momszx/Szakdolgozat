import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Spinner, Table} from "react-bootstrap";
import parse from 'html-react-parser';
import Comment from "../Comment";
import ModalEditor from "../ModalEditor";
import AddEditor from "../AddEditor";
import {Link} from "react-router-dom";
import DeleteButton from "../DeleteButton";
import * as actions from "../../store/actions";

class NoteDetailsView extends Component {
    dateReplace(dateTime) {
        return dateTime.replace("T", " ");
    }

    MyAction(text, actionType, topicId, userId, subjectId, name, id, uId, themeType, loginUserId, action) {
        if (userId == loginUserId) {
            return (
                <>
                    <ModalEditor text={text} actionType={actionType}
                                 topicId={id}
                                 userId={userId} subjectId={subjectId}
                                 name={name} id={id}
                                 uId={uId}
                                 themeType={themeType}/>
                    <DeleteButton click={action}/>
                </>
            )
        } else {
            return (
                <>
                </>
            )
        }
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
                    <>
                        {this.MyAction(strResult.text, "ModComment", this.props.note.id, strResult.userId, "", "", strResult.id, this.props.uid, "", this.props.userId, () => this.props.onDeleteComment(strResult))}
                    </>

                )}/>
            ))
        }
        let editor = (
            <>
                Kérlek <Link to="/user">jelentkezz be</Link> vagy <Link to="/user">regisztrálj</Link> először
            </>
        )
        if (this.props.uid != "") {
            editor = (
                <AddEditor text={""} actionType={"AddComment"}
                           topicId={this.props.note.id}
                           userId={this.props.userId}
                           subjectId={this.props.note.subjectId} name={""}
                           id={""} uId={this.props.uid}
                           themeType={""}/>
            )
        } else {
            editor = (
                <>
                    Kérlek <Link to="/user">jelentkezz be</Link> vagy <Link to="/user">regisztrálj</Link> először
                </>
            )
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
                                            {this.MyAction(this.props.note.text, "ModComment", "", this.props.note.userId, this.props.note.subjectId, "", this.props.note.id, this.props.uid, this.props.note.themeType, this.props.userId, () => this.props.onDeleteTopic(this.props.note))}
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
                                {editor}
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
        uid: state.user.uid,
        userId: state.user.id
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteComment: (srt) => dispatch(actions.deleteComment(srt)),
        onDeleteTopic: (srt) => dispatch(actions.deleteTopic(srt))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(NoteDetailsView);
