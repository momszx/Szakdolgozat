import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Formik} from 'formik'
import * as Yup from "yup";
import {Button, Col, Form} from "react-bootstrap";
import * as actions from "../../store/actions";
import {login} from "../../store/actions";

class Login extends Component {
    render() {
        let formik = (
            <Formik enableReinitialize={true} initialValues={{username: "", password: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            this.props.onLogin(values)
                            setSubmitting(false);
                        }, 100)
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('Add meg a felhasználóneved.'),
                        password: Yup.string().required('Add meg a jelszavad.')
                    })}>
                {(props) => {
                    let {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
                    if(this.props.username!=""){
                        isSubmitting=true;
                    }
                    return (
                        <>
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>Bejelentkezés</Form.Label>

                                    <Form.Group as={Col}>
                                        <Form.Label>Felhasználónév</Form.Label>
                                        <Form.Control name="username" type="text" placeholder="Add meg a felshaszálóneved"
                                                      onChange={handleChange} onBlur={handleBlur}
                                                      className={errors.username && touched.username ? "form-control is-invalid" : "form-control"}/>
                                        {errors.username && touched.username && (
                                            <div className={"invalid-feedback"}>{errors.username}{" "}</div>)}
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Jelszó</Form.Label>
                                        <Form.Control name="password" type="password" placeholder="Add meg a megerősitő jelszavad"
                                                      onChange={handleChange} onBlur={handleBlur}
                                                      className={errors.password && touched.password ? "form-control is-invalid" : "form-control"}/>
                                        {errors.password && touched.password && (
                                            <div className={"invalid-feedback"}>{errors.password}{" "}</div>)}
                                    </Form.Group>
                                <Button variant="success" type="submit" disabled={isSubmitting}>
                                    Bejelentkezés
                                </Button>
                            </Form>
                        </>
                    );
                }}
            </Formik>
        )
        return (
            <>
                {formik}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.user.username
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin:(user)=>dispatch(actions.login(user))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Login);
