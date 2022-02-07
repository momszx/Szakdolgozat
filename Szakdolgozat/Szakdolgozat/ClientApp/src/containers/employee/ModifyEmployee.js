import React, { Component } from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import * as actions from'../../store/actions'
import {connect} from "react-redux";

class ModifyEmployee extends Component {



    render () {
        return( <Formik
                initialValues={{id:"",name: "", address: ""}}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        this.props.onUpdateEmployee(values)
                        setSubmitting(false);
                    }, 1000);
                }}
                validationSchema={Yup.object().shape({
                    id: Yup.string()
                        .required(),
                    name: Yup.string()
                        .required(),
                    address: Yup.string()
                        .required()
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Id:</label>
                                <input
                                    name="id"
                                    type="number"
                                    placeholder="ID"
                                    value={values.id}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={ errors.id && touched.id ? "form-control is-invalid" : "form-control"}
                                />
                                {errors.id && touched.id && (
                                    <div className={"invalid-feedback"}>{errors.id} </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Full name:</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={ errors.name && touched.name ? "form-control is-invalid" : "form-control"}
                                />
                                {errors.name && touched.name && (
                                    <div className={"invalid-feedback"}>{errors.name} </div>
                                )}
                            </div>
                            <div className={"form-group"}>
                                <label htmlFor="address">Address:</label>
                                <input
                                    name="address"
                                    type="text"
                                    placeholder="Your Address"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.address && touched.address ? "form-control is-invalid" : "form-control"}
                                />
                                {errors.address && touched.address && (
                                    <div className={"invalid-feedback"}>{errors.address}</div>
                                )}
                            </div>
                            <button type="submit" disabled={isSubmitting} className={"btn btn-primary"}>
                                Modify employee
                            </button>
                        </form>
                    );
                }}
            </Formik>
        )

    }
}const mapStareToProps=state=>{
    return{
        error:state.employee.error
    }
}
const  mapDispatchToProps=dispatch=>{
    return{
        onUpdateEmployee: (employee) => dispatch(actions.updateEmployee(employee))
    }
}

export default connect(mapStareToProps,mapDispatchToProps)(ModifyEmployee);