import React from 'react'
import {Button, Image} from "react-bootstrap";
import Delete from '../IMG/icons8-delete-30.png'

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            click:this.props.click
        }
    }

    render() {
        return (
            <>
                <Button onClick={this.state.click} size="sm" variant="outline-danger"><Image  style={{width: "20px"}} src={Delete}/></Button>
            </>
        )
    }
}

export default DeleteButton