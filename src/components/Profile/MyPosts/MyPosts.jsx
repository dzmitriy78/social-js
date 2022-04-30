import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ErrorMessage, Field, Form, Formik} from "formik";

export const MyPosts = (props) => {

    let postElement = props.postData
        .map((p, i) => <Post key={i} id={p.id} message={p.message} likes={p.likeCount}/>)

    let onAddPost = (values) => {
        props.onPostChange(values.newPostText)
        props.addPost();
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
                {<Formik
                    initialValues={{
                        newPostText: props.newPostText
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.newPostText) {
                            errors.newPostText = 'Enter your post text';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {resetForm}) => {
                        onAddPost(values)
                        resetForm({values: ""})
                    }}
                >
                    {() => (
                        <Form>
                            <div>
                                <Field component = {"textarea"} name={'newPostText'} placeholder={'write a post'}/>
                            </div>
                            <ErrorMessage className={classes.error} name={"newPostText"} component={"div"}/>
                            <button type={'submit'}>Add post</button>
                        </Form>
                    )}
                </Formik>}
                <div className={classes.posts}>
                    {postElement}
            </div>
        </div>
    )
}