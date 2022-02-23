import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../store/actions";
import {Spinner, Table} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

class ScienceView extends Component {
    render() {
        const style = {
            display: "block",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80%",
            align: "central",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }
        const scienceListstyel = {
            display: "block",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80%",
            align: "central",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }
        let scienceList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading) {
            scienceList = this.props.sciences.map(strResult => (<Card style={scienceListstyel} className="text-center">
                    <Card.Text>
                        <Table>
                            <tbody>
                            <tr>
                                <td>
                                    <Link to="/science" onClick={() => this.props.onFetchScience(strResult.id)}>
                                        {strResult.name}
                                    </Link>
                                </td>
                            </tr>


                            </tbody>
                        </Table>

                    </Card.Text>
                </Card>

            ))
        }
        return (
            <>
                <Card style={style} className="text-center">
                    <Card.Text>
                        {scienceList}
                    </Card.Text>
                </Card>
            </>
        );
    }
}

const mapStateToProps= state =>{
    return {
        sciences:state.science.science,
        loading:state.science.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        /*onFetchScience: (id) => dispatch(actions.fetchsubject(id))*/
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(ScienceView);
