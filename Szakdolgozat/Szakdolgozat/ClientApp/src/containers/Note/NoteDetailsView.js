import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card} from "react-bootstrap";

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
            minHeight:"700px"
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        <Card className="text-center">
                            <Card.Header>{this.props.note.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {this.props.note.noteWrite}
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
        note:state.noteComment.viewNote,
        noteComment:state.noteComment.noteComment,
        loading:state.noteComment.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(NoteDetailsView);
