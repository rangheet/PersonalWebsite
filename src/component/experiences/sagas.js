import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const experiencesSagas = [
    takeEvery(actionType.GET_EXPERIENCES, getExperiences)
];


function* getExperiences(){

    try{
        let experiences = yield call(() => api.get(`${config.BackendEndpoint}api/Experiences`));
        if(experiences==="Error!")
        {
            experiences = [
                {
                  "location": "Bangalore, India",
                  "startTime": "1544985000000",
                  "endTime": "1562284800000",
                  "position": "Software Engineer",
                  "companyName": "Endurance International Group",
                  "mentorName": "Dhanya Angepat",
                  "mentorContact": "NA",
                  "companyLogo": {
                    "url": "https://www.endurance.com/",
                    "logoname": "Endurance",
                    "filenameOnServer": "endurance-logo.jpeg"
                  },
                  "technologies": [
                    "ReactJS",
                    "Redux",
                    "Redux-Saga",
                    "Javascript",
                    "SpringBoot",
                    "Java",
                    "Docker",
                    "Cypress"
                  ],
                  "workDescription": [
                    "Developed front-end of Manual Billing Engine using Javascript/ReactJS/Redux for 13K+ WebPros and Resellers of WebPro Panel (ResellerClub.com) "+
                    "to provide better user experience by eliminating need for 3rd party billing tool.",
                    "Integrated a newer set of APIs related to customers and orders with WebPro Panel front-end (Javascript/ReactJS)" + 
                    " and Orchestration Layer (Java SpringBoot) which reduced the loading time of the panel.",
                    "Researched about Docker Secrets, HTTP/2 server push and Material-UI for future performance enhancements."
                  ]
                },
                {
                  "location": "Gandhinagar, India",
                  "startTime": "1526236200000",
                  "endTime": "1544725800000",
                  "position": "Software Engineer",
                  "companyName": "Fintech Global Center",
                  "mentorName": "Pratik Joshi",
                  "mentorContact": "NA",
                  "companyLogo": {
                    "url": "https://www.fintechglobal.center/",
                    "logoname": "FintechGlobalCenter",
                    "filenameOnServer": "fintech-global-center-logo.jpeg"
                  },
                  "technologies": [
                    "ASP.NET Web APIs",
                    "C#",
                    "Javascript",
                    "jQuery",
                    "Docker",
                    "Jenkins",
                    "AWS S3"
                  ],
                  "workDescription": [
                    "Engineered administrative web applications using ASP.NET WebAPI, Javascript/jQuery and MSSQL to view/filter/export trading data,"+
                    " manage users/access and software distribution for the new trading platform targeted for financial institutions of Asia.",
                    "Setup Continuous Integration(CI) using Jenkins for the majority of projects which streamlined the deployment process increasing the efficiency of DevOps.",
                    "Researched Docker and Dockerized web application for future setup of Continuous Deployment (CD).",
                    "Created SFTP (SSH File Transfer Protocol) client using C++ to send trading data securely to the client’s server."
                  ]
                },
                {
                  "location": "Ahmedabad, India",
                  "startTime": "1514887200000",
                  "endTime": "1526032800000",
                  "position": "Intern",
                  "companyName": "Indian Space Research Organization (ISRO)",
                  "mentorName": "Akhilesh Sharma",
                  "mentorContact": "NA",
                  "companyLogo": {
                    "url": "https://www.isro.gov.in/",
                    "logoname": "ISRO",
                    "filenameOnServer": "isro-logo.jpg"
                  },
                  "technologies": [
                    "Python",
                    "Natural Language Processing",
                    "Neural Network",
                    "NLTK Library",
                    "Stanford NLP Tools"
                  ],
                  "workDescription": [
                    "Automated SRS document checking process by developing Natural Language Processing and Neural Network (NN) based tool using Python and NLTK library. ",
                    "Used probabilistic N-gram language model and Part-of-Speech tagging to generate input features for NN. Trained NN using the Backpropagation algorithm."
                  ]
                },
                {
                  "location": "Gandhinagar, India",
                  "startTime": "1493942400000",
                  "endTime": "1499212800000",
                  "position": "Research Intern",
                  "companyName": "Dhirubhai Ambani Institute of Information and Communication Technology",
                  "mentorName": "Dr. P S Kalyan Sasidhar",
                  "mentorContact": "NA",
                  "companyLogo": {
                    "url": "https://www.daiict.ac.in/",
                    "logoname": "DA-IICT",
                    "filenameOnServer": "daiict-logo.jpg"
                  },
                  "technologies": [
                    "Android",
                    "File Sharing",
                    "Hashmap and Binarystring Datastructure",
                    "P2P Network"
                  ],
                  "workDescription": [
                    "Built file sharing Android application for P2P network considering the scenario where the network is unstable and file size is too large. ",
                    "Leveraged Hashmap and Binary string to eliminate re-transferring of the whole file in case of connection drop by storing file chunks."       
                  ]
                }
              ];
        }
        yield put(actions.updateExperiences(experiences));
    }
    catch(error)
    {
        console.error("Exception in experiences sagas", error);
    }
}
