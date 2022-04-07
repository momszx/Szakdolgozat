import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from "react-bootstrap/Card";
import {Spinner} from "react-bootstrap";
import * as actions from "../../store/actions";
import PermissionCard from "./PermissionCard";

class PermissionView extends Component {

    componentDidMount() {
        this.props.onFetchPermission();
    }

    render() {
        let havePermission = (
            <>
                Nincs jogod
            </>
        )
        if (this.props.permission==2) {
            let userList=(
                (<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>)
            )
            if(!this.props.loading){
                userList=this.props.userList.map(
                    strResult=>(
                        <>
                            <PermissionCard user={strResult}/>
                        </>
                    )
                )
            }
            havePermission = (
                <>
                    {userList}
                </>
            )
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
            minHeight: "700px"
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        {havePermission}
                    </Card.Text>
                </Card>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        permission: state.user.permission,
        userList:state.permission.permission,
        loading:state.permission.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPermission: () => dispatch(actions.fetchPermission())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(PermissionView);
