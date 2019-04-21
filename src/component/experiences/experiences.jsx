import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { formatDate } from "../../util";
import "./experiences.css";
import "../../main-component.css";
import { Paper, Grid, Typography, Chip } from '@material-ui/core';
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
            <Fragment>
                <div id="Experiences" className="experiencesWrapperDiv" >
                        <Typography variant="h4" color="inherit" align="left" className="sectionHeader">
                                Experiences:
                        </Typography>
                        {experiences.map((experience,index) => {

                            return (<Fragment key={index}>
                                        <Paper square className="commonPaper" elevation={0}>
                                            <Grid container direction="row">
                                                <Grid item lg={2} md={2} xs={12}>
                                                    <a href={experience.companyLogo.url} target="_blank" ref="noopener"><img id={`${experience.companyLogo.logoname}-logo`} className="logo-div" src= {experience.companyLogo.filenameOnServer ? config.StaticDataLoadingEndPoint+experience.companyLogo.filenameOnServer : undefined} alt={experience.companyLogo.logoname}/></a>
                                                </Grid>
                                                <Grid item item lg={8} md={10} xs={12}>
                                                        <Typography variant="h5" color="inherit" align="left">
                                                            {experience.companyName}
                                                            <a href={experience.companyLogo.url} target="_blank" ref="noopener" className="linkIcon"><i className="material-icons">link</i></a>
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="inherit" align="left" className="secondHeading">
                                                            {experience.position}
                                                        </Typography>
                                                        <Typography variant="body1" color="inherit" align="left">
                                                            {experience.workDescription.map((descriptionItem,index) => 
                                                                <li key={index}>{descriptionItem}</li>
                                                            )}
                                                        </Typography>
                                                        <Grid container direction="row" className="experienceTechSkillContainer">
                                                            {experience.technologies.map((technology, index) => 
                                                                <Grid item key={index}>
                                                                    <Chip label={technology} className="commonChip" color="primary"/>                                                                
                                                                </Grid>
                                                            )}
                                                        </Grid>
                                                </Grid>
                                                <Grid item lg={2} md={2} xs={12}>
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
                                                </Grid>
                                            </Grid>                                                   
                                        </Paper> 
                                    </Fragment>)})}
                </div>
            </Fragment>
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