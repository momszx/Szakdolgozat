import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionDetailsView extends Component {
    render() {
        return (
            <>

            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        question:state.comment.viewTopic,
        comment:state.comment.comment,
        loading:state.comment.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(QuestionDetailsView);
