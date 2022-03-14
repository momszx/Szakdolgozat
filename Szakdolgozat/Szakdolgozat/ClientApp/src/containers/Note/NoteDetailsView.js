import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Spinner} from "react-bootstrap";
import MyCard from "../MyCard";
import Comment from "../Comment";

class NoteDetailsView extends Component {
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
        if (!this.props.loading && this.props.noteComment != []) {
            commentList = this.props.noteComment.map(strResult => (
                <Comment dateTime={strResult.dateTime} points={strResult.points} user={strResult.user}
                         text={strResult.text}/>
            ))
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        <Card className="text-center">
                            <Card.Header>{this.props.note.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {this.props.note.text}
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
        note: state.comment.viewTopic,
        noteComment: state.comment.comment,
        loading: state.comment.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(NoteDetailsView);
