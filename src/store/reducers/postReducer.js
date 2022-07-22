import {ADD_POST, PUT_POST, POST_POST, GET_POST, DELETE_POST} from '../actions/actionsForPost'


export function reducer(state = [], action) {
    switch (action.type) {
        case GET_POST:
            return [...action.payload];
        case POST_POST:
            return {value: action.value_1};
        case PUT_POST: {
            const newList = state.map((item) => {
                if (item.id === action.payload.post.id) {
                    const updatedItem = {
                        ...item,
                        id: action.payload.post.id,
                        title: action.payload.post.title,
                        content: action.payload.post.content
                    };
                    return updatedItem;
                }

                return item;
            })
            return newList;
        }
        case DELETE_POST:
            return state.filter(post => action.payload.id !== post.id);
        case ADD_POST:
            return [...state, {
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
            }];
        default:
            return state;
    }
}