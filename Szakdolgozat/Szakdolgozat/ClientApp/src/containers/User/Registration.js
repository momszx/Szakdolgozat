import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Formik} from "formik";
import * as Yup from "yup";
import {Button, Col, Form} from "react-bootstrap";
import * as actions from "../../store/actions";

class Registration extends Component {
    render() {
        let formik = (
            <Formik enableReinitialize={true} initialValues={{username: "", password: "", passwordConfirmation: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            this.props.onRegistration(values)
                            setSubmitting(false);
                        }, 100)
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('Add meg a felhasználóneved.'),
                        password: Yup.string().required('Add meg a jelszavad.').min(8, 'Minimum jelszó hossz 8 karakter.'),
                        passwordConfirmation: Yup.string().required('Add meg a jelszavad.').min(8, 'Minimum jelszó hossz 8 karakter.').oneOf([Yup.ref('password'), null], 'Jelszavak nem eggyeznek')
                    })}>
                {(props) => {
                    const {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
                    return (
                        <>
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>Regisztráció</Form.Label>

                                <Form.Group as={Col}>
                                    <Form.Label>Felhasználónév</Form.Label>
                                    <Form.Control name="username" type="text" placeholder="Add meg a felhasználónév"
                                                  onChange={handleChange} onBlur={handleBlur}
                                                  className={errors.username && touched.username ? "form-control is-invalid" : "form-control"}/>
                                    {errors.username && touched.username && (
                                        <div className={"invalid-feedback"}>{errors.username}{" "}</div>)}
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Jelszó</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Add meg a jelszavad"
                                                  onChange={handleChange} onBlur={handleBlur}
                                                  className={errors.password && touched.password ? "form-control is-invalid" : "form-control"}/>
                                    {errors.password && touched.password && (
                                        <div className={"invalid-feedback"}>{errors.password}{" "}</div>)}
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Jelszó megerősítése</Form.Label>
                                    <Form.Control name="passwordConfirmation" type="password" placeholder="Add meg a jelszó megerősítése"
                                                  onChange={handleChange} onBlur={handleBlur}
                                                  className={errors.passwordConfirmation && touched.passwordConfirmation ? "form-control is-invalid" : "form-control"}/>
                                    {errors.passwordConfirmation && touched.passwordConfirmation && (
                                        <div className={"invalid-feedback"}>{errors.passwordConfirmation}{" "}</div>)}
                                </Form.Group>
                                <Button variant="success" type="submit" disabled={isSubmitting}>
                                    Regisztráció
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
    return {};
}
const mapDispatchToProps = (dispatch) => {
    return {
        onRegistration:(user) =>dispatch(actions.registration(user))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Registration);
