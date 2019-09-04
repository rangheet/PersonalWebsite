import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";

export const skillsSagas = [
    takeEvery(actionType.GET_SKILLS, getSkills)
];


function* getSkills(){

    try{
        let skills = yield call(() => api.get(`${config.BackendEndpoint}api/Skills`));
        if(skills==="Error!")
        {
            skills = [
                {
                  "ratingOutOf10": 10,
                  "name": "C++",
                  "category": "Language"
                },
                {
                  "ratingOutOf10": 9,
                  "name": "Java",
                  "category": "Language"
                },                
                {
                  "ratingOutOf10": 9,
                  "name": "Python",
                  "category": "Language"
                },
                {
                  "ratingOutOf10": 9,
                  "name": "Javascript",
                  "category": "Language"
                },
                {
                  "ratingOutOf10": 10,
                  "name": "C",
                  "category": "Language"
                },
                {
                  "ratingOutOf10": 8,
                  "name": "C#",
                  "category": "Language"
                },
                {
                  "ratingOutOf10": 9,
                  "name": "SQL",
                  "category": "Language"
                },




                {
                  "ratingOutOf10": 10,
                  "name": "ReactJS",
                  "category": "WebTech"
                },
                {
                  "ratingOutOf10": 10,
                  "name": "Redux",
                  "category": "WebTech"
                },
                {
                  "ratingOutOf10": 9,
                  "name": "Redux-Saga",
                  "category": "WebTech"
                },
                {
                  "ratingOutOf10": 9,
                  "name": "jQuery",
                  "category": "WebTech"
                },
                {
                  "ratingOutOf10": 10,
                  "name": "AJAX",
                  "category": "WebTech"
                },
                {
                  "ratingOutOf10": 8,
                  "name": "Java SpringBoot",
                  "category": "WebTech"
                },
                {
                  "ratingOutOf10": 9,
                  "name": "ASP.NET WebAPI",
                  "category": "WebTech"
                },               
                {
                  "ratingOutOf10": 9,
                  "name": "AWS S3",
                  "category": "WebTech"
                },
                {
                  "ratingOutOf10": 9,
                  "name": "AWS EC2",
                  "category": "WebTech"
                },
                                
                {
                  "ratingOutOf10": 10,
                  "name": "HTML",
                  "category": "WebTech"
                },
                {
                  "ratingOutOf10": 9,
                  "name": "CSS",
                  "category": "WebTech"
                },
                
                
                
                {
                  "ratingOutOf10": 8,
                  "name": "Docker",
                  "category": "DevOpsTools"
                },
                {
                  "ratingOutOf10": 10,
                  "name": "Jenkins",
                  "category": "DevOpsTools"
                },
                
                




                {
                  "ratingOutOf10": 10,
                  "name": "JIRA",
                  "category": "PM"
                },
                {
                  "ratingOutOf10": 9,
                  "name": "Git",
                  "category": "PM"
                },
                {
                  "ratingOutOf10": 10,
                  "name": "Scrum",
                  "category": "PM"
                }
              ];
        }
        yield put(actions.updateSkills(segregateSkills(skills)));
    }
    catch(error)
    {
        console.error("Exception in skills sagas", error);
    }
}


function segregateSkills(skills){

    let languageSkills = [], webTechSkills = [], PMSkills = [], DevOpsTools = [];

    skills.forEach(skill => {
        if(skill.category==="Language")        
            languageSkills.push(skill);
        else if(skill.category==="PM")
            PMSkills.push(skill);
        else if(skill.category==="WebTech")
            webTechSkills.push(skill);
        else
            DevOpsTools.push(skill);
    });

    return {
        languageSkills,
        webTechSkills,
        PMSkills,
        DevOpsTools
    };
}