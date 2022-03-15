import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React from "react"
import {Button} from "react-bootstrap";
import ReactModal from "react-modal"
import * as actions from "../store/actions";
import {connect} from "react-redux";
import {addComment, addTopic, updateComment} from "../store/actions";

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            actionType: this.props.actionType,
            showModal: false,
            topicId: this.props.topicId,
            userId: this.props.userId,
            subjectId: this.props.subjectId,
            name: this.props.name,
            id: this.props.id,
            uid: this.props.uId,
            themeType:this.props.themeType
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
                console.log("switch!")
                this.props.onAddComment(temp)
                break;
            case "AddTopic":
                this.props.onAddTopic(temp)
                break;
            case "ModComment":
                this.props.onUpdateComment(temp)
                break;
            case "ModTopic":
                this.props.onUpdateTopic(temp)
                break;
            default:
            // code block
        }
    }

    render() {
        return (
            <>
                <Button onClick={this.handleOpenModal}>Trigger Modal</Button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
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
                        <Button variant="danger" onClick={this.handleCloseModal}>Close Modal</Button>
                    </div>
                </ReactModal>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddComment: (strResult) => dispatch(actions.addComment(strResult)),
        onUpdateComment: (strResult) => dispatch(actions.updateComment(strResult)),
        onAddTopic: (strResult) => dispatch(actions.addTopic(strResult)),
        onUpdateTopic: (strResult) => dispatch(actions.updateTopic(strResult)),
    }
}

export default connect(null,mapDispatchToProps)(MyEditor)