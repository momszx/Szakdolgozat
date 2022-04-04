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
                        username: Yup.string().min(3, "Minimum 3 karakter")
                            .max(30, "Maximum 30 karakter").required('Add meg a felhasználóneved.'),
                        password: Yup.string().required('Add meg a jelszavad.').min(8, 'Minimum jelszó hossz 8 karakter.')
                            .test("isValidPass", " Nem megfelelő jelszó tratalmaznia kell 1 nagy betűt, 1 kis betűt ,egyszámot és egy speciális karaktert", (value, context) => {
                                const hasUpperCase = /[A-Z]/.test(value);
                                const hasLowerCase = /[a-z]/.test(value);
                                const hasNumber = /[0-9]/.test(value);
                                const hasSymbole = /[!@#%&]/.test(value);
                                let validConditions = 0;
                                const numberOfMustBeValidConditions = 3;
                                const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
                                conditions.forEach((condition) =>
                                    condition ? validConditions++ : null
                                );
                                if (validConditions >= numberOfMustBeValidConditions) {
                                    return true;
                                }
                                return false;
                            }),
                        passwordConfirmation: Yup.string().required('Add meg a jelszavad.').min(8, 'Minimum jelszó hossz 8 karakter.')
                            .test("isValidPass", " Nem megfelelő jelszó tratalmaznia kell 1 nagy betűt, 1 kis betűt ,egyszámot és egy speciális karaktert", (value, context) => {
                                const hasUpperCase = /[A-Z]/.test(value);
                                const hasLowerCase = /[a-z]/.test(value);
                                const hasNumber = /[0-9]/.test(value);
                                const hasSymbole = /[!@#%&]/.test(value);
                                let validConditions = 0;
                                const numberOfMustBeValidConditions = 3;
                                const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
                                conditions.forEach((condition) =>
                                    condition ? validConditions++ : null
                                );
                                if (validConditions >= numberOfMustBeValidConditions) {
                                    return true;
                                }
                                return false;
                            }).oneOf([Yup.ref('password'), null], 'Jelszavak nem eggyeznek')
                    })}>
                {(props) => {
                    let {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
                    if (this.props.username != "") {
                        isSubmitting = true;
                    }
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
                                    <Form.Control name="passwordConfirmation" type="password"
                                                  placeholder="Add meg a jelszó megerősítése"
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
    return {
        username: state.user.username
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onRegistration: (user) => dispatch(actions.registration(user))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Registration);
