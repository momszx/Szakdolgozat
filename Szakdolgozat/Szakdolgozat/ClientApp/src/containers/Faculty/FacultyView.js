import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../../store/actions";
import Card from 'react-bootstrap/Card';
import {Nav, Spinner} from "react-bootstrap";
import MyCard from "../MyCard"
import LiveChat from "../Chat/LiveChat";
import AddListModal from "../AddListModal";
import {Link} from "react-router-dom";

class FacultyView extends React.Component {

    componentDidMount() {
        this.props.onFetchFaculty();
    }

    mod(strResult) {
        this.props.onFetchScience(strResult.id)
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
        let facultyList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading) {
            facultyList = this.props.facultyes.map(strResult => (
                <MyCard url={"/science"} name={strResult.name} click={() => this.mod(strResult)}/>
            ))
        }
        let admin= (<></>)
        if (this.props.permission == 2) {
            admin = (
                <AddListModal type={'faculty'} title={'kar'} id={0}></AddListModal>
            )
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        {admin}
                        {facultyList}
                        <LiveChat myUsername={this.props.username} uid={this.props.uid} id={this.props.id}/>
                    </Card.Text>
                </Card>

            </>);
    }
}

const mapStareToProps = state => {
    return {
        facultyes: state.faculty.faculty,
        loading: state.faculty.loading,
        username: state.user.username,
        uid:state.user.uId,
        id:state.user.id,
        permission: state.user.permission,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchFaculty: () => dispatch(actions.fetchFaculty()),
        onFetchScience: (id) => dispatch(actions.fetchScience(id))
    }
}


export default connect(mapStareToProps, mapDispatchToProps)(FacultyView);
