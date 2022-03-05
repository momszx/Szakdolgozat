import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from "react-bootstrap/Card";
import {Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class SubjectDetailsView extends Component {
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
                                    <Link to={"/subjectDetails"} onClick={() => this.mod(strResult)}>
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
                                    <Link to={"/subjectDetails"} onClick={() => this.mod(strResult)}>
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
    return {}
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(SubjectDetailsView);
