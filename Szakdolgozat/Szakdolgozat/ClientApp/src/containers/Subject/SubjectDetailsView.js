import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from "react-bootstrap/Card";
import {Spinner} from "react-bootstrap";
import * as actions from "../../store/actions";
import MyCard from "../MyCard";
import {Link} from "react-router-dom";
import AddEditor from "../Editor/AddEditor";

class SubjectDetailsView extends Component {
    fetchComment(strResult) {
        this.props.onFetchComment(strResult,this.props.userId)
        return
    }

    render() {
        const divstyle ={
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            textAlign: "center",

        }
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
        let noteList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading) {
            noteList = this.props.topic.filter(topic => topic.themeType === "Note").map(strResult => (
                <MyCard url={"/noteDetails"} name={strResult.name} click={() => this.fetchComment(strResult)}/>
            ))
        }
        let questionList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading) {
            questionList = this.props.topic.filter(topic => topic.themeType === "Question").map(strResult => (
                <MyCard url={"/questionDetails"} name={strResult.name} click={() => this.fetchComment(strResult)}/>
            ))
        }
        let editor = (
            <>
                Kérlek <Link to="/user">jelentkezz be</Link> vagy <Link to="/user">regisztrálj</Link> először
            </>
        )
        if (this.props.uid != "" &&this.props.topic[0]!=undefined) {
            editor = (
                <Card style={style} className="text-center">
                    <Card.Text>
                        <AddEditor text={""} actionType={"AddTopic"}
                                   topicId={""}
                                   userId={this.props.userId}
                                   subjectId={this.props.topic[0].subjectId} name={""}
                                   id={""} uId={this.props.uid}
                                   themeType={""} topic={true}/>
                    </Card.Text>
                </Card>
            )
        } else {
            editor = (
                <div style={divstyle}>
                    Kérlek <Link to="/user">jelentkezz be</Link> vagy <Link to="/user">regisztrálj</Link> először
                </div>
            )
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
                {editor}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        topic: state.topic.topic,
        topicLoading: state.topic.loading,
        uid: state.user.uid,
        userId: state.user.id
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchComment: (strResult,userId) => dispatch(actions.fetchComment(strResult,true,userId)),
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(SubjectDetailsView);
