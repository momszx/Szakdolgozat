import React from 'react'
import {ButtonGroup, ToggleButton} from "react-bootstrap";

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
            this.setState({ radioValue: e.currentTarget.value });
            let temp = this.state.reactionNumber;
            temp[idx] = temp[idx] + 1;
            temp[this.state.lastindex] = temp[this.state.lastindex] - 1;
            this.setState({ reactionNumber: temp });
            this.setState({ lastindex: idx });
        }
    }
    render() {
        const radios = [
            { name: "👍", value: "1" },
            { name: "👎", value: "2" },
            { name: "💗", value: "3" }
        ];
        return (
            <>
                <ButtonGroup size="sm">
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx == this.state.radioValue-1 ? 'outline-success' : 'outline-dark'}
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