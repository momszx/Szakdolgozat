import React from 'react'
import RichTextEditor from "react-rte";
import {Button, Form, Image} from "react-bootstrap";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import ReactModal from "react-modal"
import ForkIcon from '../../IMG/git-fork-svgrepo-com.svg'

class ForkEditor extends React.Component {
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
            themeType: "Note",
            topic: this.props.topic,
            open: false
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

    myAction(actionType, TopicId, UserId, Text, SubjectId, Name, Id, uId, ThemeType, Open) {
        let temp = {
            topicId: TopicId,
            userId: UserId,
            text: Text,
            subjectId: SubjectId,
            name: Name,
            id: Id,
            uid: uId,
            themeType: ThemeType,
            open: Open
        }
        this.props.onAddTopic(temp)
    }

    render() {
        let topic
        if (this.props.topic) {
            topic = (
                <>
                    <Form.Control type="text" placeholder="Mások is szerkeszthetik?" onChange={(event, editor) => {
                        this.setState({name: event.target.value})
                    }}></Form.Control>
                    <br/>
                    <Form.Check defaultChecked={false} type="switch" label="Check this switch"
                                onChange={(event, editor) => {
                                    this.setState({open: event.target.checked})
                                }}/>
                </>
            )
        } else {
            topic = (
                <>
                </>
            )
        }
        return (
            <>
                <Button variant="outline-success" size="sm" onClick={this.handleOpenModal}><Image
                    style={{width: "20px"}} src={ForkIcon}/></Button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <div className="App">
                        <div className="editor">
                            {topic}
                            <RichTextEditor
                                value={this.state.text}
                                onChange={value => this.setState({text: value})}
                                placeholder="Szólj hozzá"
                            />
                        </div>
                        <Button variant="success"
                                onClick={() => this.myAction(this.state.actionType,
                                    this.state.topicId,
                                    this.state.userId,
                                    this.state.text.toString('html'),
                                    this.state.subjectId,
                                    this.state.name,
                                    this.state.id,
                                    this.state.uid,
                                    this.state.themeType,
                                    this.state.open)}>
                            Save
                        </Button>
                        <Button variant="danger" onClick={this.handleCloseModal}>Close</Button>
                    </div>
                </ReactModal>
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
export default connect(null, mapDispatchToProps)(ForkEditor)