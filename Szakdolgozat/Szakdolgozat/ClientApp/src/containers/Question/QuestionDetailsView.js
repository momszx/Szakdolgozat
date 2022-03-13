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
        question:state.questionComment.viewQuestion,
        questionComment:state.questionComment.questionComment,
        loading:state.questionComment.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(QuestionDetailsView);
