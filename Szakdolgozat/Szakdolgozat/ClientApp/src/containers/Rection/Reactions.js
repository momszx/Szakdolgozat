import React from 'react'
import {ButtonGroup, ToggleButton} from "react-bootstrap";
import {loginStart, loginSuccess} from "../../store/actions";

class Reactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reactionNumber: this.props.reactionNumber,
            checked: false,
            radioValue: this.props.radioValue,
            lastindex: -1
        };
    }

    click(e, idx) {
        if (this.state.radioValue !== e.currentTarget.value) {
            this.setState({radioValue: e.currentTarget.value});
            let temp = this.state.reactionNumber;
            temp[idx] = temp[idx] + 1;
            temp[this.state.lastindex] = temp[this.state.lastindex] - 1;
            this.setState({reactionNumber: temp});
            this.setState({lastindex: idx});
        }
    }

    toDb() {
        console.log("valami !")
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            asd:"asd",
            userId: this.state.userId,
            conId: this.state.conId,
            type: this.state.type,
            value: this.state.radioValue,

        })
        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        console.log(raw)
        fetch('/Vote/', requestOptions).then(response => response.json()).then(data => {
            console.log(data)
        })
    }

    render() {
        const radios = [
            {name: "👍", value: "1"},
            {name: "👎", value: "2"},
            {name: "💗", value: "3"}
        ];
        return (
            <>
                <ButtonGroup size="sm">
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx == this.state.radioValue - 1 ? 'outline-success' : 'outline-dark'}
                            name="radio"
                            value={radio.value}
                            checked={this.state.radioValue === radio.value}
                            onChange={(e) => this.click(e, idx)}
                        >
                            {radio.name + ": " + this.state.reactionNumber[idx]}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </>
        );
    }
}

export default Reactions;