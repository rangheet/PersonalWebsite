import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";

export const projectsSagas = [
    takeEvery(actionType.GET_PROJECTS, getProjects)
];


function* getProjects(){

    try{
        let projects = yield call(() => api.get(`${config.BackendEndpoint}api/Projects`));
        if(projects==="Error!")
        {
            projects = [
                {
                  "company": "DA-IICT",
                  "title": "News articles classifier",
                  "projectType": "Academic",
                  "projectDescription": [
                    "Made Naive Bayes classifier to categorize news articles using Python, NLTK library and various NLP techniques achieving 0.78 F1 Score."
                  ],
                  "technologies": [
                    "Python",
                    "Information Retrieval",
                    "NLTK Library"
                  ]
                },
                {
                  "company": "DA-IICT",
                  "title": "Alzheimer disease detector",
                  "projectType": "Academic",
                  "projectDescription": [
                    "Developed Naural Network based classifier given MRI images dataset to detect Alzheimer’s Disease achieving 70% accuracy"
                  ],
                  "technologies": [
                    "Neural Network",
                    "MATLAB"
                  ]
                },
                {
                  "company": "DA-IICT",
                  "title": "Election Database Management System",
                  "projectType": "Academic",
                  "projectDescription": [
                    "Designed and created database using PostgreSQL for election considering entities like voters, candidates, constituencies, political parties."+
                    " Created queries and stored procedures to manipulate and view data and different kinds of relations between entities."
                  ],
                  "technologies": [
                    "PostgreSQL"
                  ]
                },
                // {
                //   "company": "DA-IICT",
                //   "title": "Dynamic traffic signal timer using OpenCV",
                //   "projectType": "Academic",
                //   "projectDescription": [
                //     "Developed a system which sets traffic signal timer dynamically according to the traffic in the lane",
                //     "Used Image Processing technique like background subtraction and blob detection to detect traffic density"
                //   ],
                //   "technologies": [
                //     "Python",
                //     "Internet of Things",
                //     "OpenCV"
                //   ]
                // },
                {
                  "company": "Sherlock Inc.",
                  "title": "Easy Website",
                  "projectType": "Personal",
                  "projectDescription": [
                    "Designed and implemented web application for creating portfolios which also has facility to host them as your own website.",
                    "Developed front-end using Javascript, ReactJS, Redux, Redux-Saga and Material-UI. Back-end was developed using Java SpringBoot. Used MySQL to store website and user data."
                  ],
                  "repoURL": "https://github.com/rangheet/easy-website",
                  "liveProjectURL": "http://bit.ly/easywebsite1",
                  "technologies": [
                    "ReactJS",
                    "SprintBoot",
                    "Material-UI",
                    "Javascript",
                    "HTML",
                    "CSS",
                    "AWS EC2",
                    "Nginx"
                  ]
                }
              ];
        }

        yield put(actions.updateProjects(segregateProjects(projects)));
    }
    catch(error)
    {
        console.error("Exception in projects sagas", error);
    }
}

function segregateProjects(allProjects){

    let personalProjects = [], academicProjects = [];

    allProjects.forEach(project => {
        if(project.projectType==="Personal")        
            personalProjects.push(project);
        else
            academicProjects.push(project);
    });

    return {
        personalProjects,
        academicProjects
    };
}