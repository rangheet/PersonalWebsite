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
                bio: "Hi! My name is Heet Dave and I am pursuing MS in Computer Science at Arizona State University. I'm currently seeking full-time opportunities starting in May 2021."
                + " This summer, I was working as a Software Engineering Intern at Apollo Education group in Data Engineering Team."
                + " I worked on creating data pipelines using Python for data coming from BlackBoard which involved the use of AWS Athena, Glue, DynamoDB, S3 and microservices."
                + " Apart from this I've also worked as a Front End Engineer and Full Stack Engineer which involved a little bit of DevOps too."
                + " I consider myself fortunate that I've got to work in different domains in such a short time. This has allowed me to explore different areas of Software Development and beyond."
                + " I find learning new technologies very intriguing and I still try to learn new things in my leisure."
                + " I'm also into books, video games, music and twitch. Feel free to contact me via Email or LinkedIn.", 
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

