import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../../store/actions";
import Card from 'react-bootstrap/Card';
import {fetchEmployeeSuccess} from "../../store/actions/EmployeeActions";
import {Spinner, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class FacultyView extends React.Component {

    componentDidMount() {
        this.props.onFetchFaculty();
    }
    mod(strResult){
        this.props.onFetchScience(strResult.id)
        //alert("boo")
        return
    }
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
        const facultyListstyel = {
            display: "block",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            width: "80%",
            align: "central",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }
        let facultyList = (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
        if (!this.props.loading) {
            facultyList = this.props.facultyes.map(strResult => (<Card style={facultyListstyel} className="text-center">
                    <Card.Text>
                        <Table>
                            <tbody>
                            <tr>
                                <td>
                                    <Link to={"/science"} onClick={() => this.mod(strResult)} >
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
        return (<>
            <Card style={style} className="text-center">
                <Card.Text>
                    {facultyList}
                </Card.Text>
            </Card>
        </>);
    }
}

const mapStareToProps = state => {
    return {
        facultyes: state.faculty.faculty, loading: state.faculty.loading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchFaculty: () => dispatch(actions.fetchFaculty()),
        onFetchScience: (id) => dispatch(actions.fetchScience(id))
    }
}


export default connect(mapStareToProps, mapDispatchToProps)(FacultyView);
