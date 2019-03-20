
const skill1 = {
    name: "JAVASCRIPT",
    ratingOutOf10: "8"
};

const skill2 = {
    name: "HTML",
    ratingOutOf10: "9"
};

const initialState = {
    skills:[ skill1, skill2 ]
};

export const actionType = {
    GET_SKILLS: "[Skills] Get Skills",
    UPDATE_SKILLS: "[Skills] Update Skills"
};

export const actions = {
    getSkills(){
        return {
            type: actionType.GET_SKILLS
        };
    },
    updateSkills(payload){
        return {
            type: actionType.UPDATE_SKILLS,
            payload: payload
        }
    }
}

export function skillsReducer(state = initialState, action){
    switch(action.type)
    {
        case actionType.UPDATE_SKILLS:
            return {
                ...state,
                skills: action.payload
            };
        default:
            return state;
    }
}




