import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import classes from "../Profile/MyPosts/MyPosts.module.css";
import {postFormSchema} from "../FormValidation/formSchema";

const PostForm = (props) => {

    return (
        <div>
            {<Formik
                initialValues={{
                    text: ""
                }}
                validate={values => {
                    const errors = {};
                    if (!values.text) {
                        errors.text = 'Enter your post text'
                    }
                    return errors;
                }}
                onSubmit={(values, {resetForm}) => {
                    props.callback(values)
                    resetForm({values: ""})
                }}
                validationSchema={postFormSchema}
            >
                {() => (
                    <Form>
                        <div>
                            <Field component={"textarea"}
                                   name={'text'}
                                   placeholder={'write a post'}/>
                        </div>
                        <ErrorMessage className={classes.error}
                                      name={"text"}
                                      component={"div"}/>
                        <button type={'submit'}>Add post</button>
                    </Form>
                )}
            </Formik>}
        </div>
    );
};

export default PostForm;