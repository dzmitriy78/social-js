import React from 'react';
import classes from "./Dialogs.module.css"
import {Message} from "./Messages/Messages";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Dialog} from "./Dialog/Dialog";

export function Dialogs(props) {

    let state = props.messagePage;

    let dialogsElement = state.dialogsData
        .map((d, i) => <Dialog key={i} avatar={d.avatar} name={d.name} id={d.id}/>);

    let messageElement = state.messageData
        .map((m, i) => <Message key={i} id={m.id} message={m.message}/>);

    let onAddDialog = (values) => {
        let dialogText = values.newDialogText;
        props.onDialogChange(dialogText);
        props.addDialog();
    }

    /*    if (!props.isAuth) return <Navigate replace to = "/login"/>*/

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
                {<Formik
                    initialValues={{
                        newDialogText: state.newDialogText
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.newDialogText) {
                            errors.newDialogText = "Enter your message text";
                        }
                        return errors;
                    }}
                    onSubmit={(values, {resetForm}) => {
                        onAddDialog(values)
                        resetForm({values: ""})
                    }}
                >
                    {() => (
                        <Form>
                            <div>
                                <Field component={"textarea"}
                                       name={"newDialogText"}
                                       placeholder={"Enter a message"}/>
                            </div>
                            <ErrorMessage className={classes.error} name="newDialogText" component="div"/>
                            <button type={"submit"}>Add message</button>
                        </Form>
                    )}
                </Formik>}
                {/*<div>
                    <textarea onChange={onDialogChange}
                              value={state.newDialogText}/>
                </div>
                <div>
                    <button disabled={state.newDialogText === ""}
                            onClick={onAddDialog}>Add post
                    </button>
                </div>*/}
            </div>
        </div>
    )
}