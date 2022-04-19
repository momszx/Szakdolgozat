import React, {Component} from 'react';
import {Button, Image} from "react-bootstrap";
import ReactModal from "react-modal"
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import EditIcon from '../../IMG/edit-svgrepo-com.svg'
import RichTextEditor from 'react-rte';

class ModalEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: RichTextEditor.createValueFromString(this.props.text, 'html'),
            actionType: this.props.actionType,
            showModal: false,
            topicId: this.props.topicId,
            userId: this.props.userId,
            subjectId: this.props.subjectId,
            name: this.props.name,
            id: this.props.id,
            uid: this.props.uId,
            themeType: this.props.themeType,
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

    myAction(actionType, TopicId, UserId, Text, SubjectId, Name, Id, uId, ThemeType) {
        let temp = {
            topicId: TopicId,
            userId: UserId,
            text: Text,
            subjectId: SubjectId,
            name: Name,
            id: Id,
            uid: uId,
            themeType: ThemeType
        }
        switch (actionType) {
            case "ModComment":
                this.props.onUpdateComment(temp)
                break;
            case "ModTopic":
                this.props.onUpdateTopic(temp)
                break;
            default:
        }
    }

    render() {
        return (
            <>
                <Button variant="outline-success" size="sm" onClick={this.handleOpenModal}><Image
                    style={{width: "20px"}} src={EditIcon}/></Button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <div className="App">
                        <div className="editor">
                            <RichTextEditor
                                value={this.state.text}
                                onChange={value => this.setState({text: value})}

                            />
                        </div>
                        <Button variant="success"
                                onClick={() => this.myAction(this.state.actionType, this.state.topicId, this.state.userId, this.state.text.toString('html'), this.state.subjectId, this.state.name, this.state.id, this.state.uid, this.state.themeType)}>Save</Button>
                        <Button variant="danger" onClick={this.handleCloseModal}>Close</Button>
                    </div>
                </ReactModal>
            </>
        )
    }
}

ModalEditor.propTypes = {};
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateComment: (strResult) => dispatch(actions.updateComment(strResult)),
        onUpdateTopic: (strResult) => dispatch(actions.updateTopic(strResult)),
    }
}

export default connect(null, mapDispatchToProps)(ModalEditor)