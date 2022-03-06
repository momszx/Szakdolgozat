import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spinner, Table} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {fetchQuestionComment} from "../../store/actions";
import * as actions from "../../store/actions";

class QuestionView extends Component {
    mod(strResult){
        this.props.onFetchQuestionComment(strResult.id)
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
            minHeight:"700px"
        }
        const Liststyel = {
            display: "block",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80%",
            align: "central",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }
        let questionList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading) {
            questionList = this.props.question.map(strResult => (<Card style={Liststyel} className="text-center">
                    <Card.Text>
                        <Table>
                            <tbody>
                            <tr>
                                <td>
                                    <Link /*to={"/questionDetails"} onClick={() => this.mod(strResult)}*/ >
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
                        {questionList}
                    </Card.Text>
                </Card>
            </>
        );
    }
}

const mapStateToProps= state =>{
    return {
        question:state.question.question
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchQuestionComment:(id)=>dispatch(actions.fetchQuestionComment(id))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(QuestionView);
