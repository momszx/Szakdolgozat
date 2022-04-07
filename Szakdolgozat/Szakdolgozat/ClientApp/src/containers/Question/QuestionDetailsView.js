import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Col, Container, Row, Spinner, Table} from "react-bootstrap";
import parse from "html-react-parser"
import Comment from "../Comment";
import ModalEditor from "../Editor/ModalEditor";
import AddEditor from "../Editor/AddEditor";
import {Link} from "react-router-dom";
import * as actions from "../../store/actions";
import DeleteButton from "../DeleteButton";
import Reactions from "../Rection/Reactions";
import Vote from "../Rection/Vote";

class QuestionDetailsView extends Component {
    dateReplace(dateTime) {
        return dateTime.replace("T", " ");
    }

    MyAction(text, actionType, topicId, userId, subjectId, name, id, uId, themeType, loginUserId, action, open, permission) {
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
        }else {
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
        let reactionNumber = [5, 2, 2];
        let radioValue = 1;
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
                                     this.props.question.id,
                                     strResult.userId,
                                     "",
                                     "",
                                     strResult.id,
                                     this.props.uid,
                                     "",
                                     this.props.userId,
                                     () => this.props.onDeleteComment(strResult),
                                     this.props.question.open,
                                     this.props.permission)}
                             </>
                         )}/>
            ))
        }
        let editor
        if (this.props.uid != "") {
            editor = (
                <AddEditor text={""} actionType={"AddComment"}
                           topicId={this.props.question.id}
                           userId={this.props.userId}
                           subjectId={this.props.question.subjectId} name={""}
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
                                <Container>
                                    <Row>
                                        <Col xs={1}>
                                            <Vote number={this.props.question.points}
                                                  userId={this.props.userId}
                                                  conId={this.props.question.id}
                                                  type={"Topic"}
                                                  value={this.props.question.value}
                                                  uid={this.props.uid}
                                                  id={this.props.question.myVoteId}/>
                                        </Col>
                                        <Col xs={2}>
                                            {this.props.question.user}
                                        </Col>
                                        <Col>
                                            {this.props.question.name}
                                        </Col>
                                        <Col xs={2}>
                                            {this.dateReplace(this.props.question.dateTime)}
                                        </Col>
                                        <Col xs={1}>
                                            {this.MyAction(this.props.question.text,
                                                "ModTopic",
                                                "",
                                                this.props.question.userId,
                                                this.props.question.subjectId,
                                                "",
                                                this.props.question.id,
                                                this.props.uid,
                                                this.props.question.themeType,
                                                this.props.userId,
                                                () => this.props.onDeleteTopic(this.props.question),
                                                this.props.question.open,
                                                this.props.permission)}
                                        </Col>
                                    </Row>

                                </Container>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {parse(this.props.question.text)}
                                    <div className="d-flex flex-row-reverse">
                                        <div className="p-2">
                                            <Reactions reactionNumber={this.props.question.reaction}
                                                       radioValue={this.props.question.myReactionValue}
                                                       id={this.props.question.myReactioId}
                                                       userId={this.props.userId}
                                                       conId={this.props.question.id}
                                                       type={"Topic"}
                                                       value={this.props.question.value}
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
        question: state.comment.viewTopic,
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
)(QuestionDetailsView);
