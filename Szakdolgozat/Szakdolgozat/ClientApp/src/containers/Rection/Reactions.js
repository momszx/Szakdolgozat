import React, {useEffect, useState} from 'react'
import {ButtonGroup, ToggleButton} from "react-bootstrap";

const Reactions = (props) => {
    const [reactionNumber, setReactionNumber] = useState(props.reactionNumber)
    const [checked, setChecked] = useState(false)
    const [radioValue, setRadioValue] = useState(props.radioValue)
    const [lastIndex, setLastIndex] = useState(-1)
    const [id] = useState(props.id)
    const [userId] = useState(props.userId);
    const [conId] = useState(props.conId);
    const [type] = useState(props.type);
    const [uid] = useState(props.uid);
    const [changed, setChanged] = useState(false)


    const click = (e, idx) => {
        if (radioValue !== e.currentTarget.value) {
            setRadioValue(e.currentTarget.value)
            let temp = reactionNumber;
            temp[idx] = temp[idx] + 1;
            temp[lastIndex] = temp[lastIndex] - 1;
            setReactionNumber(temp)
            setLastIndex(idx)
            setChanged(true)
        }
    }

    useEffect(() => {
        if (changed) {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let raw = JSON.stringify({
                userId: userId,
                conId: conId,
                type: type,
                value: radioValue,
                uid: uid,
                id: id
            })
            let requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch('/Reaction/', requestOptions).then(response => response.json()).then(data => {
            })
        }
    }, [radioValue])
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
                        variant={idx == radioValue - 1 ? 'outline-success' : 'outline-dark'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => click(e, idx)}
                    >
                        {radio.name + ": " + reactionNumber[idx]}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );

}

export default Reactions;