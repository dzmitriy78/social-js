const addDialog = "ADD-DIALOG";
const updateNewDialogText = "UPDATE-NEW-DIALOG-TEXT";
export const onDialogChangeActionCreator = (dialogText) => ({type: updateNewDialogText, newDialText: dialogText});
export const addDialogActionCreator = () => ({type: addDialog});

const messageReducer = (state, action) => {

    switch (action.type) {
        case "ADD-DIALOG":
            let newDialog = {
                id: 10,
                message: state.newDialogText
            }
            state.messageData.push(newDialog);
            state.newDialogText = "";
            break;
        case "UPDATE-NEW-DIALOG-TEXT":
            state.newDialogText = action.newDialText;
            break;
    }
    return state;
}
export default messageReducer;
