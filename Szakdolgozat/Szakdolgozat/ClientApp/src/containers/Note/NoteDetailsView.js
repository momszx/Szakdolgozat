import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Col, Container, Image, Row, Spinner, Table} from "react-bootstrap";
import parse from 'html-react-parser';
import Comment from "../Comment";
import ModalEditor from "../Editor/ModalEditor";
import AddEditor from "../Editor/AddEditor";
import {Link} from "react-router-dom";
import DeleteButton from "../DeleteButton";
import * as actions from "../../store/actions";
import Vote from "../Rection/Vote";
import Reactions from "../Rection/Reactions";
import EditIcon from "../../IMG/edit-svgrepo-com.svg";
import ForkEditor from "../Editor/ForkEditor";

class NoteDetailsView extends Component {
    dateReplace(dateTime) {
        return dateTime.replace("T", " ");
    }

    Fork(text, actionType, topicId, userId, subjectId, name, id, uId, themeType, loginUserId) {
        if ( loginUserId!=0) {
            return (
                <>
                    <ForkEditor text={text} actionType={actionType}
                                topicId={id}
                                userId={userId} subjectId={subjectId}
                                name={name} id={id}
                                uId={uId}
                                themeType={themeType} topic={"Note"}/>
                </>
            )
        } else {
            return (
                <>
                </>
            )
        }
    }

    MyAction(text, actionType, topicId, userId, subjectId, name, id, uId, themeType, loginUserId, action, open, permission) {
        if (userId == loginUserId && !open) {
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
        } else if (permission != 0) {
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
        } else if (open && userId == loginUserId) {
            return (
                <>
                    <Link to={"/liveEditor"}>
                        <Image
                            style={{width: "20px"}} src={EditIcon}/>
                    </Link>
                    <DeleteButton click={action}/>
                </>
            )
        } else if (open && uId != "") {
            return (
                <>
                    <Link to={"/liveEditor"}>
                        <Image
                            style={{width: "20px"}} src={EditIcon}/>
                    </Link>
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
                <Comment dateTime={strResult.dateTime}
                         points={strResult.points}
                         user={strResult.user}
                         text={strResult.text}
                         id={strResult.myVoteId}
                         userId={this.props.userId}
                         conId={strResult.id}
                         uid={this.props.userId}
                         value={strResult.value}
                         reactionNumber={strResult.reaction}
                         radioValue={strResult.myReactionValue}
                         voteId={strResult.myVoteId}
                         reactionId={strResult.myReactionId}
                         action={(
                             <>
                                 {this.MyAction(strResult.text,
                                     "ModComment",
                                     this.props.note.id,
                                     strResult.userId,
                                     "",
                                     "",
                                     strResult.id,
                                     this.props.uid,
                                     "",
                                     this.props.userId,
                                     () => this.props.onDeleteComment(strResult),
                                     this.props.note.open,
                                     this.props.permission)}
                             </>
                         )}/>
            ))
        }
        let editor
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
                    K??rlek <Link to="/user">jelentkezz be</Link> vagy <Link to="/user">regisztr??lj</Link> el??sz??r
                </>
            )
        }

        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        <Card className="text-center">
                            <Card.Header>
                                <Container fluid>
                                    <Row>
                                        <Col xs={1}>
                                            <Vote number={this.props.note.points}
                                                  userId={this.props.userId}
                                                  conId={this.props.note.id}
                                                  type={"Topic"}
                                                  value={this.props.note.value}
                                                  uid={this.props.uid}
                                                  id={this.props.note.myVoteId}/>
                                        </Col>
                                        <Col xs={2}>
                                            {this.props.note.user}
                                        </Col>
                                        <Col>
                                            {this.props.note.name}
                                        </Col>
                                        <Col xs={2}>
                                            {this.dateReplace(this.props.note.dateTime)}
                                        </Col>
                                        <Col xs={1}>
                                            {this.Fork(this.props.note.text,
                                                "ModTopic",
                                                "",
                                                this.props.userId,
                                                this.props.note.subjectId,
                                                "", "",
                                                this.props.uid,
                                                this.props.note.themeType,
                                                this.props.userId)}
                                        </Col>
                                        <Col xs={1}>
                                            {this.MyAction(this.props.note.text,
                                                "ModTopic",
                                                "",
                                                this.props.note.userId,
                                                this.props.note.subjectId,
                                                "",
                                                this.props.note.id,
                                                this.props.uid,
                                                this.props.note.themeType,
                                                this.props.userId,
                                                () => this.props.onDeleteTopic(this.props.note),
                                                this.props.note.open,
                                                this.props.permission)}
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {parse(this.props.note.text)}
                                    <div className="d-flex flex-row-reverse">
                                        <div className="p-2">
                                            <Reactions reactionNumber={this.props.note.reaction}
                                                       radioValue={this.props.note.myReactionValue}
                                                       id={this.props.note.myReactioId}
                                                       userId={this.props.userId}
                                                       conId={this.props.note.id}
                                                       type={"Topic"}
                                                       value={this.props.note.value}
                                                       uid={this.props.uid}/>
                                        </div>
                                    </div>
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
        userId: state.user.id,
        permission: state.user.permission
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
