import {ADD_POST,GET_POST, PUT_POST, POST_POST, DELETE_POST} from '../actions/actionsForPost'

export function addPost(post) {
    return {
        type: ADD_POST,
        payload:post
    };
}

export function getPost(post) {
    return {
        type: GET_POST,
        payload:post
    };
}

export function putPost(post) {
    return {
        type: PUT_POST,
        payload:{post}
    };
}

export function postPost(id) {
    return {
        type: POST_POST,
        payload:{id}
    };
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload:{id}
    };
}

