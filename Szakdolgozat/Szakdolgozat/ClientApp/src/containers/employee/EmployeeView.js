import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/actionsTypes';
import * as actions from '../../store/actions'
import AddEmployee from "./AddEmployee";
import ModifyEmployee from "./ModifyEmployee";

class employeeView extends Component {

    componentDidMount() {
        this.props.onFetchEmployee();
    }

    render() {
        let employees = "Loading..."
        if (!this.props.loading ) {
            employees= this.props.employees.map(strResult => (
                <tr>
                    <td>{strResult.id}</td>
                    <td>
                        {strResult.name}

                    </td>
                    <td>
                        {strResult.address}

                    </td>
                    <td>
                        <button onClick={()=>this.props.onRemoveEmployee(strResult.id)}>Delete</button>
                    </td>
                </tr>
            ))
        }
        return (
            <>
                <AddEmployee />
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Delete</th>
                    </tr>
                    {employees}
                </table>
                <ModifyEmployee/>
            </>
        );
    }
}

const mapStareToProps = state => {
    return {
        employees: state.employee.employees,
        loading: state.employee.loading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchEmployee: () => dispatch(actions.fetchEmployee()),
        onRemoveEmployee: (id) => dispatch(actions.removeEmployee(id)),

    };
};
export default connect(mapStareToProps, mapDispatchToProps)(employeeView);