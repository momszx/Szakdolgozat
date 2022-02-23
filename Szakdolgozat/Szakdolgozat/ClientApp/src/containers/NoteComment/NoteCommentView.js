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
    return {};
}

export default connect(
    mapStateToProps,
)(NoteCommentView);
