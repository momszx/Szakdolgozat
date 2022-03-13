import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../store/actions";
import {Spinner} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import MyCard from "../MyCard";

class ScienceView extends Component {
    mod(strResult){
        this.props.onFetchSubject(strResult.id)
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
        let scienceList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading) {
            scienceList = this.props.sciences.map(strResult => (
                    <MyCard url={"/subject"} name={strResult.name} click={() =>this.mod(strResult)}/>
            ))
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        {scienceList}
                    </Card.Text>
                </Card>
            </>
        );
    }
}

const mapStateToProps= state =>{
    return {
        sciences:state.science.science,
        loading:state.science.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchSubject: (id) => dispatch(actions.fetchSubject(id))
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(ScienceView);
