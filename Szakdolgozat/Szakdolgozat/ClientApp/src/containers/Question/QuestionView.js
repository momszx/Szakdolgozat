import React, {Component} from 'react';
import {connect} from 'react-redux';

class QuestionView extends Component {
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

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(QuestionView);