import React from 'react'
import arrow from '../../IMG/up-arrow-svgrepo-com.svg'
import {Col, Container, Image, Row, Table} from "react-bootstrap";
import {connect} from "react-redux";
import * as actions from "../../store/actions";

class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number,
            userId: this.props.userId,
            conId: this.props.conId,
            type: this.props.type,
            value: this.props.value,
            uid:this.props.uid,
        }
    }
    click(event){
        if(event=="up"){
            if(this.state.value==1){
                this.setState({value: 0},function () {
                    console.log(this.state);
                })
                this.setState({number:this.state.number-1})
            }
            else{
                this.setState({value:1},function () {
                    console.log(this.state);
                })
                this.setState({number:this.state.number+1})
            }
        }
        else if(event=="down"){
            if(this.state.value==-1){
                this.setState({value: 0},function () {
                    console.log(this.state);
                })
                this.setState({number:this.state.number+1})
            }
            else{
                this.setState({value:-1},function () {
                    console.log(this.state);
                })
                this.setState({number:this.state.number-1})
            }
        }
    }
    valueRender() {

        if(this.state.value==1){
            console.log(this.state.value)
            return(
                <p style={{color: "#038505"}}>
                    {this.state.number}
                </p>
            )
        }
        else if(this.state.value==-1){
            return(
                <p style={{color: "#850303"}}>
                    {this.state.number}
                </p>
            )
        }
        else {
            return (
                <p >
                    {this.state.number}
                </p>
            )
        }
    }

    render() {
        const style = {
            "-webkit-transform": "rotate(180deg)",
            "-moz-transform": "rotate(180deg)",
            "-ms-transform": "rotate(180deg)",
            "-o-transform": "rotate(180deg)",
            "transform": "rotate(180deg)",
            width:"20px"
        }

        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Image src={arrow} style={{width:"20px"}} onClick={()=>this.click("up")}/>
                        </Col>
                        <Col>{this.valueRender()}</Col>
                        <Col>
                            <Image style={style} onClick={()=>this.click("down")} src={arrow}/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchFaculty: () => dispatch(actions.fetchFaculty()),
        onFetchScience: (id) => dispatch(actions.fetchScience(id))
    }
}

export default connect(null, mapDispatchToProps)(Vote);