const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";
export const addPostActionCreator = () => ({type: addPost});
export const updatePostActionCreator = (text) => ({type: updateNewPostText, newText: text})

const profileReducer = (state, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCount: 0
            }
            state.postData.push(newPost);
            state.newPostText = "";
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export default profileReducer;