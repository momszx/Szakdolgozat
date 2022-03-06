import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from "react-bootstrap/Card";
import {Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {fetchNoteComment, fetchQuestionComment} from "../../store/actions";
import * as actions from "../../store/actions";

class SubjectDetailsView extends Component {
    fetchQuestionComment(strResult){
        this.props.onFetchQuestionComment(strResult.id)
        //alert("boo")
        return
    }
    fetchNoteComment(strResult){
        this.props.onFetchNoteComment(strResult.id)
        //alert("boo")
        return
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
            minHeight: "350px"
        }
        const min={

        }
        const liststyel = {
            display: "block",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80%",
            align: "central",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }
        let noteList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading) {
            noteList = this.props.note.map(strResult => (<Card style={liststyel} className="text-center">
                    <Card.Text>
                        <Table>
                            <tbody>
                            <tr>
                                <td>
                                    <Link to={"/noteDetails"} onClick={() => this.fetchNoteComment(strResult)}>
                                        {strResult.name}
                                    </Link>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card>

            ))
        }
        let questionList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading) {
            questionList = this.props.question.map(strResult => (<Card style={liststyel} className="text-center">
                    <Card.Text>
                        <Table>
                            <tbody>
                            <tr>
                                <td>
                                    <Link to={"/questionDetails"} onClick={() => this.fetchQuestionComment(strResult)}>
                                        {strResult.name}
                                    </Link>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card>

            ))
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        Jegyzetek
                        {noteList}
                    </Card.Text>
                </Card>
                <Card style={style} className="text-center">
                    <Card.Text>
                        Kérdések
                        {questionList}
                    </Card.Text>
                </Card>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note.note,
        noteLoading: state.note.loading,
        question: state.question.question,
        noteQuestion: state.question.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchQuestionComment:(id)=>dispatch(actions.fetchQuestionComment(id)),
        onFetchNoteComment:(id)=>dispatch(actions.fetchNoteComment(id))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(SubjectDetailsView);
