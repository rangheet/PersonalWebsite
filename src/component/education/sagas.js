import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const educationSagas = [
    takeEvery(actionType.GET_EDUCATION, getEducation)
];


function* getEducation(){

    try{
        let education = yield call(() => api.get(`${config.BackendEndpoint}api/Education`));
        if(education==="Error!")
        {
            education = [
                {
                  "state": "AZ",
                  "country": "United States",
                  "cgpa": "N/A",
                  "instituteName": "Arizona State University",
                  "startYear": 2019,
                  "endYear": 2021,
                  "city": "Tempe",
                  "instituteLogo": {
                    "url": "https://www.asu.edu/",
                    "logoname": "ASU",
                    "filenameOnServer": "asu-logo.png"
                  },
                  "instituteAbbr": "ASU",
                  "degree": "Master of Science in Computer Science"
                },
                {
                  "state": "Gujarat",
                  "country": "India",
                  "cgpa": 7.06,
                  "instituteName": "Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)",
                  "startYear": 2014,
                  "endYear": 2018,
                  "city": "Gandhinagar",
                  "instituteLogo": {
                    "url": "https://www.daiict.ac.in/",
                    "logoname": "DA-IICT",
                    "filenameOnServer": "daiict-logo.jpg"
                  },
                  "instituteAbbr": "DA-IICT",
                  "degree": "B.Tech in Information and Communication Technology (ICT)"
                }
              ];
        }
        yield put(actions.updateEducation(education));
    }
    catch(error)
    {
        console.error("Exception in education sagas", error);
    }
}
