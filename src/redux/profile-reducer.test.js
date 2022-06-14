import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react';

let state = {
    postData: [
        {id: 1, message: "Hi, how are you", likeCount: 15},
        {id: 2, message: "It's my first post", likeCount: 25},
        {id: 3, message: "Hi", likeCount: 1},
    ]
}
it('post should be added', () => {
    let action = addPostActionCreator('Hi! New test')
    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(4)
    expect(newState.postData[3].message).toBe('Hi! New test')
})

it('message should be corrected ', () => {
    let action = addPostActionCreator('Hi! New test')

    let newState = profileReducer(state, action)

    expect(newState.postData[3].message).toBe('Hi! New test')
})

it('after deleting length of messaged should be decremented ', () => {

    let action = deletePost(2)
    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(2)
    expect(newState.postData[1].message).toBe("Hi")
})


