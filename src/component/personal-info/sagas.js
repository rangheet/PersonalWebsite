import { takeEvery, put, call } from "redux-saga/effects";
import { actionType, actions } from "./ducks";
import { api } from "../../api";
import { config } from "../../config";

export const personalInfoSagas = [
    takeEvery(actionType.READ_PERSONALINFO, getPersonalInfo)
];

function* getPersonalInfo()
{
    try
    {
        let personalInfo = yield call(() => api.get(`${config.BackendEndpoint}api/PersonalInfo`));

        //API call failed. Use stub data.
        if(personalInfo==="Error!")
        {
            personalInfo = {
                bio: "Hi! This is Heet from 221B Baker Street. I am currently pursuing Master of Science in Computer Science at Arizona State University."
                + " I've worked in various domains throughout my undergrad and the past year as a Software Engineer. I'm familiar with"
                + " various technologies, programming languages and frameworks and I'm always trying to learn more aout them in my leisure."
                + " I find learning new technologies very intriguing. It's like climbing a mountain and enjoying the view from summit after all the hardwork."
                + " I'm also into books, games and music. Feel free to contact me via Email or LinkedIn.", 
                company: "Endurance International Group",
                dateOfBirth: "856377000000",
                name: "Heet Dave",
                occupation: "Software Engineer",
                profileImage: "Sherlock Icon.png",
                resume: "HeetDave_Resume.pdf"
            };
        }
        yield put(actions.updatePersonalInfoAction(personalInfo));
    }
    catch(error)
    {
        console.error("Exception in personal-info saga", error);
    }

}