import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Table} from "react-bootstrap";
import Vote from "../Rection/Vote";
import parse from "html-react-parser";
import Reactions from "../Rection/Reactions";
import LiveEditor from "./LiveEditor";

class LiveEditorController extends Component {
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
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        <Card className="text-center">
                            <Card.Header>
                                {this.props.note.name}
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <LiveEditor text={this.props.note.text} Id={this.props.note.id} uid={this.props.uid} group={this.props.note.id+"|"+this.props.note.name} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Card.Text>
                </Card>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.comment.viewTopic,
        uid: state.user.uid,
        userId: state.user.id
    };
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(LiveEditorController);
