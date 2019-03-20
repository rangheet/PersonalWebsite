import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { formatDate } from "../../util";
import { map } from "lodash";
import "./experiences.css";
import { Paper, Grid, Typography } from '@material-ui/core';
import { config } from "../../config";

class Experiences extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getExperiences();
    }

    render()
    {
        let experiences=this.props.experiences.allExperiences;
        return (
            <div id="Experiences" className="experiencesWrapperDiv" >
                <div style={{ position: "relative", top:"3%", left: "1%"}}>
                    <Typography variant="h4" color="inherit" align="left" style={{position: "relative", color: "#eeeeee"}}>
                            Experiences:
                    </Typography>
                    {map(experiences,(experience,index) => {

                                                    // let imgSrc = "";
                                                    // if(experience.companyLogo.filenameOnServer)
                                                    //     imgSrc = config.BackendEndpoint + experience.companyLogo.filenameOnServer;

                                                    //console.log("ImageSRC", imgSrc);
                                                    return (<Fragment key={index.toString()}>
                                                                <Paper square elevation={0} style={{position: "relative", padding: "8px" ,marginTop: 16, marginBottom: 16, marginLeft: 4, marginRight: 2, width: "98%", left: "0%", border:"4px white solid", background: "black"}}>
                                                                    <Grid container direction="row">
                                                                        <Grid item style={{maxWidth: "100%", maxHeight: "100%", marginRight: 15}}>
                                                                            <a href={experience.companyLogo.url} target="_blank" ref="noopener"><img id={`${experience.companyLogo.logoname}-logo`} className="logo-div" src= {experience.companyLogo.filenameOnServer ? config.BackendEndpoint+experience.companyLogo.filenameOnServer : undefined} alt={experience.companyLogo.logoname}/></a>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <div style={{width:"1px", background: "white", height:"50%", marginRight: 15, position: "relative", top: "25%"}}/>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Typography variant="h5" color="inherit" align="left">
                                                                                {experience.companyName}
                                                                                <a href={experience.companyLogo.url} style={{position:"absolute", top:"5%"}}><i className="material-icons">link</i></a>
                                                                            </Typography>
                                                                            <Typography variant="subtitle1" color="inherit" align="left">
                                                                                {experience.position}
                                                                            </Typography>
                                                                            {/* Position: {experience.position} <br/> */}
                                                                            <div style={{position:"absolute", right:0, top: 10}}>
                                                                                <Typography variant="subtitle1" color="inherit" align="left">
                                                                                    {formatDate(experience.startTime)}-{formatDate(experience.endTime)} <br/>                                                                               
                                                                                </Typography>
                                                                                <Grid container direction="row">
                                                                                    <Grid item>
                                                                                        <i className="material-icons">location_on</i>
                                                                                    </Grid>
                                                                                    <Grid item>
                                                                                        <Typography variant="subtitle1" color="inherit" align="left">
                                                                                            {experience.location}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </div>

                                                                            MentorName: {experience.mentorName} <br/>
                                                                            MentorContact: {experience.mentorContact} <br/>
                                                                            WorkDescription: {experience.workDescription} <br/>
                                                                            
                                                                        </Grid>
                                                                    </Grid>                                                   
                                                                </Paper> 
                                                            </Fragment>)})}
                </div>
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { 
        experiences: state.experiences,
        logos: state.logos 
    }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getExperiences: () => dispatch(actions.getExperiences()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Experiences);