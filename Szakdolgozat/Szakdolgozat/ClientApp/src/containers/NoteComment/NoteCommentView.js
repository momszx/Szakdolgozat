import React, {Component} from 'react';
import {connect} from 'react-redux';

class NoteCommentView extends Component {
    render() {
        return (
            <>

            </>
        );
    }
}

const mapStateToProps= state =>{
    return {
        note:state.noteComment.note,
        noteComment:state.noteComment.noteComment,
        loading:state.noteComment.loading,
    };
}

export default connect(
    mapStateToProps,
)(NoteCommentView);
