import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const logosSagas = [
    takeEvery(actionType.GET_LOGOS, getLogos)
];


function* getLogos(){

    try{
        let logos = yield call(() => api.get(`${config.BackendEndpoint}api/Logos`));

        if(logos==="Error!")
        {
            logos = {
                "LinkedIn": {
                  "url": "https://www.linkedin.com/in/heetdave/",
                  "logoname": "LinkedIn",
                  "filenameOnServer": "linkedin-logo-white.svg"
                },
                "Email": {
                  "url": "mailto:heetdave@outlook.com",
                  "logoname": "Email",
                  "filenameOnServer": "email-icon.png"
                },
                "Github": {
                  "url": "https://github.com/rangheet",
                  "logoname": "Github",
                  "filenameOnServer": "github-logo-white.png"
                },
                "GithubBlack": { 
                  "url": "https://github.com/rangheet", 
                  "logoname": "GithubBlack", 
                  "filenameOnServer": "github-logo-black.png" 
                }
              };
        }
        yield put(actions.updateLogos(logos));
    }
    catch(error)
    {
        console.error("Exception in logos sagas", error);
    }
}
