import React from 'react'
import {Button, Form} from "react-bootstrap";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import RichTextEditor from 'react-rte';

class AddEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: RichTextEditor.createValueFromString(this.props.text, 'html'),
            actionType: this.props.actionType,
            topicId: this.props.topicId,
            userId: this.props.userId,
            subjectId: this.props.subjectId,
            name: this.props.name,
            id: this.props.id,
            uid: this.props.uId,
            themeType: this.props.themeType,
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
        let topic
        let openHelper
        if (this.state.themeType == "Note") {
            openHelper = (<Form.Check defaultChecked={false} type="switch" label="Mindenki szerekesztheti"
                                      onChange={(event, editor) => {
                                          this.setState({open: event.target.checked})
                                      }}/>)
        } else {
            openHelper = (<></>)
        }
        if (this.props.topic) {
            topic = (
                <>
                    <Form.Control type="text" placeholder="Addj egy cimet neki" onChange={(event, editor) => {
                        this.setState({name: event.target.value})
                    }}></Form.Control>
                    <br/>
                    <Form.Control as="select" defaultValue={0} onChange={(event, editor) => {
                        this.setState({themeType: event.target.value})
                    }}>
                        <option disabled value={0}>Kérlek válasz</option>
                        <option value={"Note"}>Jegyzet</option>
                        <option value={"Question"}>Kérdés</option>
                    </Form.Control>
                    <br/>
                    {openHelper}
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
export default connect(null, mapDispatchToProps)(AddEditor)