import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const electivesSagas = [
    takeEvery(actionType.GET_ELECTIVES, getElectives)
];


function* getElectives(){

    try{
        let electives = yield call(() => api.get(`${config.BackendEndpoint}api/Electives`));
        if(electives==="Error!")
        {
            electives = [
                {
                  "name": "Multimedia and Web Databases",
                  "courseCode": "CSE515",
                  "institute": "ASU"
                },
                {
                  "name": "Mobile Computing",
                  "courseCode": "CSE535",
                  "institute": "ASU"
                },
                {
                  "name": "Data Structures",
                  "courseCode": "IT205",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Algorithms",
                  "courseCode": "IT301",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Object Oriented Programming",
                  "courseCode": "IT114",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Computer  Organization",
                  "courseCode": "IT209",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Systems Software",
                  "courseCode": "IT215",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Neural Networks",
                  "courseCode": "IT481",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Database Management System",
                  "courseCode": "IT304",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Human Computer Interaction",
                  "courseCode": "IT476",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Information Retrieval",
                  "courseCode": "IT550",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Software Engineering",
                  "courseCode": "IT314",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Operating Systems",
                  "courseCode": "IT308",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Internet of Things",
                  "courseCode": "IT478",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Systems and Network Security",
                  "courseCode": "IT453",
                  "institute": "DA-IICT"
                },
                {
                  "name": "Compiler Design",
                  "courseCode": "IT423",
                  "institute": "DA-IICT"
                }
              ];
        }
        yield put(actions.updateElectives(electives));
    }
    catch(error)
    {
        console.error("Exception in electives sagas", error);
    }
}
