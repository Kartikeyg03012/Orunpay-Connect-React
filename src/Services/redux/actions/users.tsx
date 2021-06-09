import * as type from '../reducers/types';

export function getUsers(users: any){
        return {
            type:type.GET_USERS,
            payload:users,
        }
}