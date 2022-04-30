import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";

const Login = () => (
    <div>
        <h1>Login</h1>
        {<Formik
            initialValues={{
                email: "",
                password: "",
                rememberMe: false
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
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={loginFormSchema}>
            {() => (
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
                    <button type={'submit'}>Log in</button>
                </Form>
            )}
        </Formik>}
    </div>
)
export default Login;