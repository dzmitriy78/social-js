import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {Field, Form, Formik} from "formik";

export const MyPosts = (props) => {

    let postElement = props.postData
        .map((p,i) => <Post key = {i} id={p.id} message={p.message} likes={p.likeCount}/>)

    let onAddPost = (values) => {
        props.onPostChange(values.newPostText)
        props.addPost();
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                {<Formik
                    initialValues={{
                        newPostText: props.newPostText
                    }}
                    onSubmit={ (values, { resetForm }) => {
                        onAddPost(values)
                        resetForm( {values: ''})
                    }}
                  >
                    {() => (
                        <Form>
                            <div>
                                <Field type={'text'} name={'newPostText'} placeholder={'write a post'}/>
                            </div>
                            <button type={'submit'}>Add post</button>
                        </Form>
                    )}
                </Formik>}


                {/*<div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button disabled={props.newPostText === ""}
                            onClick={onAddPost}>Add post
                    </button>
                </div>*/}
                <div className={classes.posts}>
                    {postElement}
                </div>
            </div>
        </div>
    )
}