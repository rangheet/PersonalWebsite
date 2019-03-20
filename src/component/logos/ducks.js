import { config } from "../../config";

const initialState = {
    LinkedIn: {},
    Github: {}
};

export const actionType = {
    GET_LOGOS: "[Logos] Get Logos",
    UPDATE_LOGOS: "[Logos] Update Logos"
};

export const actions = {
    getLogos(){
        return {
            type: actionType.GET_LOGOS
        };
    },
    updateLogos(payload){
        return {
            type: actionType.UPDATE_LOGOS,
            payload: payload
        }
    }
}

export function logosReducer(state = initialState, action){
    switch(action.type)
    {
        case actionType.UPDATE_LOGOS:
            return {
                ...state,
                LinkedIn: action.payload.LinkedIn,
                Github: action.payload.Github
            };
        default:
            return state;
    }
}




