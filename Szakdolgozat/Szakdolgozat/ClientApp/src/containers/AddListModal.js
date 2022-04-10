import React from 'react'
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import ReactModal from "react-modal";
import AddList from "./AddList";

class AddListModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
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


    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };
        const sendMessage = async (text, type,id) => {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let raw = JSON.stringify({
                "id": id,
                "text": text,
                "type": type,
            })
            let requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch('/InsertList', requestOptions)
                .then(res => res.text())          // convert to plain text
                .then(text => console.log(text))  // then log it out

        }
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col sm={2}>
                            <Button variant="outline-success" size="sm" onClick={this.handleOpenModal}>Hozzáadás a listához</Button>
                        </Col>
                    </Row>
                </Container>

                <ReactModal
                    style={customStyles}
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <div className="App">
                        <div className="editor">
                            <AddList type={this.props.type} title={this.props.title} id={this.props.id} sendMessage={sendMessage}/>
                        </div>

                        <Button variant="danger" onClick={this.handleCloseModal}>Close</Button>
                    </div>
                </ReactModal>
            </>
        )
    }
}

export default AddListModal