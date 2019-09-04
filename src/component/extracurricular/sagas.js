import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const extracurricularSagas = [
    takeEvery(actionType.GET_EXTRACURRICULAR, getExtracurricular)
];


function* getExtracurricular(){

    try{
        let extracurricular = yield call(() => api.get(`${config.BackendEndpoint}api/Extracurricular`));
        if(extracurricular==="Error!")
        {
            extracurricular = [
                {
                  "state": "Gujarat",
                  "country": "India",
                  "organization": "Annual Festival Committee, DA-IICT",
                  "timeOfActivity": "Apr 2016 - Mar 2017",
                  "workDescription": "Played a key role in sponsorship, marketing and event managemen. Dealt with various companies regarding sponsorship and marketing.",
                  "position": "Core Committee Member"
                },
                {
                  "state": "Gujarat",
                  "country": "India",
                  "organization": "Agaria Heet Rakshak Manch",
                  "timeOfActivity": "December 2015",
                  "workDescription": "Worked in desert area of Gujarat to spread awareness among salt farmers regarding use of solar water pump for salt farming.",
                  "position": "Volunteer"
                }
              ];
        }
        yield put(actions.updateExtracurricular(extracurricular));
    }
    catch(error)
    {
        console.error("Exception in extracurricular sagas", error);
    }
}
