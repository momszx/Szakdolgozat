import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../../store/actions";
import Card from 'react-bootstrap/Card';
import {Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import MyCard from "../MyCard";
import AddListModal from "../AddListModal";

class SubjectView extends React.Component {
    mod(strResult) {
        this.props.onFetchTopic(strResult.id,this.props.userId)
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
            minHeight: "700px"
        }
        let subjectList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading) {
            subjectList = this.props.subject.map(strResult => (
                <MyCard url={"/subjectDetails"} name={strResult.name} click={() =>this.mod(strResult)}/>
            ))
        }
        let admin= (<></>)
        if (this.props.permission == 2) {
            admin = (
                <AddListModal type={'subject'} title={'Tantárgy'} id={this.props.scienceId}></AddListModal>
            )
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        {admin}
                        {subjectList}
                    </Card.Text>
                </Card>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        subject: state.subject.subject,
        loading: state.subject.loading,
        userId: state.user.id,
        scienceId:state.list.scienceId,
        permission: state.user.permission,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchTopic: (id,userId) => dispatch(actions.fetchTopic(id,userId))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(SubjectView);
