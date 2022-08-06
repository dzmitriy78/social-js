import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {loginFormSchema} from "../FormValidation/formSchema";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router";

const Login = ({isAuth, login, captchaUrl}) => {
    if (isAuth) {
        return <Navigate replace to="/profile"/>
    }
    return <div>
        <h1>Login</h1>
        <h3>
            Данные тестового аккаунта:<br/>
            Email: free@samuraijs.com<br/>
            Password: free
        </h3>
        {<Formik
            initialValues={{
                email: "",
                password: "",
                rememberMe: false,
                captcha: ""
            }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, {setStatus}) => {
                login(values.email, values.password, values.rememberMe, values.captcha, setStatus)
            }}
            validationSchema={loginFormSchema}>
            {({status}) => (
                <Form>
                    <div>
                        <Field type={'text'} name={'email'} placeholder={'e-mail'}/>
                    </div>
                    <ErrorMessage style={{color: "red"}} name={"email"} component={"div"}/>
                    <div>
                        <Field type={'password'} name={'password'} placeholder={'password'}/>
                    </div>
                    <ErrorMessage style={{color: "red"}} name={"password"} component={"div"}/>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>
                    <div style={{color: "red"}}>{status}</div>
                    <div>
                        {captchaUrl && <img  src={captchaUrl} alt={"captcha"}/>}
                        {captchaUrl && <Field type={'text'} name={'captcha'} placeholder={'insert symbols from image'}/>}
                    </div>
                    <button type={'submit'}>Log in</button>
                </Form>
            )}
        </Formik>}

    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);

