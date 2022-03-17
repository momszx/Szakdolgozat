import React from 'react'
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {Button} from "react-bootstrap";
import * as actions from "../store/actions";
import {connect} from "react-redux";

class AddEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: this.props.temp,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }
    myAction(actionType, TopicId, UserId, Text, SubjectId, Name, Id, uId,ThemeType) {
        let temp = {
            topicId: TopicId,
            userId: UserId,
            text: Text,
            subjectId: SubjectId,
            name: Name,
            id: Id,
            uid: uId,
            themeType:ThemeType
        }
        switch (actionType) {
            case "AddComment":
                this.props.onAddComment(temp)
                break;
            case "AddTopic":
                this.props.onAddTopic(temp)
                break;
            default:
        }
    }
    render() {
        return (
            <>
                <div className="App">
                    <div className="editor">
                        <CKEditor
                            editor={ClassicEditor}
                            data={this.state.text}
                            onChange={(event, editor) => {
                                this.setState({text: editor.getData()})
                            }}
                        />
                    </div>
                    <Button variant="success"
                            onClick={()=>this.myAction(this.state.actionType, this.state.topicId, this.state.userId, this.state.text, this.state.subjectId, this.state.name, this.state.id, this.state.uid,this.state.themeType)}>Save</Button>
                </div>
            </>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddComment: (strResult) => dispatch(actions.addComment(strResult)),
        onAddTopic: (strResult) => dispatch(actions.addTopic(strResult)),
    }
}
export default connect(null,mapDispatchToProps)(AddEditor)