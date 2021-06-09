import * as type from './types';

const initialState = {
    users: [],
}

export default function users(state = initialState, action: { type: any; payload: any; }) {
    switch (action.type) {
        case type.GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}