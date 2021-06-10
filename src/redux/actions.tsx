import {types} from './types'

export function fetchData(data: any){
    return{
        type: types.SEND_REQUEST,
        payload:data
    }
}


export const fetchDataSuccess = (user: any)=>{
    return{
        type : types.SEND_REQUEST_SUCESS,
        payload: user
    }
}


export const fetchDataFailure = (error: any)=>{
    return{
        type: types.SEND_REQUEST_FAILURE,
        payload:{},
        error: error
    }
}