import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import {Paper, Typography, Grid, Chip} from "@material-ui/core";
import "./education.css";
import "../../main-component.css";
import { config } from "../../config";
class Education extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getEducation();
    }

    render()
    {
        let education=this.props.education.education;
        return (
            <div className="educationWrapper">
                    <Typography variant="h4" color="inherit" align="left" className="sectionHeader">
                        Education:
                    </Typography>
                    {education.map((institute,index) => <Paper key={index} square className="commonPaper" elevation={0}>
                                                            <Grid container direction="row">
                                                                <Grid item lg={2} md={2} xs={12}>
                                                                    <a href={institute.instituteLogo.url} target="_blank" ref="noopener"><img id={`${institute.instituteLogo.logoname}-logo`} className="logo-div" src= {institute.instituteLogo.filenameOnServer ? config.StaticDataLoadingEndPoint+institute.instituteLogo.filenameOnServer : undefined} alt={institute.instituteLogo.logoname}/></a>
                                                                </Grid>
                                                                <Grid item lg={8} md={10} xs={12}>
                                                                    <Typography variant="h5" color="inherit" align="left">
                                                                        {institute.instituteName}
                                                                        <a href={institute.instituteLogo.url} target="_blank" ref="noopener" className="linkIcon"><i className="material-icons">link</i></a>
                                                                    </Typography>
                                                                    <Typography variant="subtitle1" color="inherit" className="secondHeading">
                                                                        {institute.degree}
                                                                    </Typography>
                                                                    <Typography variant="button" color="inherit" align="left">
                                                                        CGPA: {institute.cgpa}
                                                                    </Typography>
                                                                        Coursework:
                                                                        <Grid container direction="row" >
                                                                        {      
                                                                            this.props.electives.electives.filter((elective) => elective.institute===institute.instituteAbbr).map( 
                                                                            filteredElective => <Grid item key={filteredElective.courseCode}><Chip label={`${filteredElective.name}`} className="commonChip"/></Grid>)
                                                                        }
                                                                        </Grid>
                                                                </Grid>    
                                                                <Grid item lg={2} md={2} xs={12} /*className="educationLocationTime"*/>
                                                                        <Grid container direction="column">
                                                                            <Grid item className="educationStartEndTime">
                                                                                <Typography variant="subtitle1" color="inherit" align="left">
                                                                                    {institute.startYear}-{institute.endYear} <br/>                                                                               
                                                                                </Typography>
                                                                            </Grid>
                                                                            <Grid item>
                                                                                <Grid container direction="row">
                                                                                    <Grid item>
                                                                                        <i className="material-icons">location_on</i>
                                                                                    </Grid>
                                                                                    <Grid item>
                                                                                        <Typography variant="subtitle1" color="inherit" align="left">
                                                                                            {institute.state}, {institute.country}
                                                                                        </Typography>
                                                                                    </Grid>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Grid> 
                                                                </Grid>                                          
                                                            </Grid>
                                                        </Paper>)}
                                                    
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { education: state.education,
             electives: state.electives
    }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getEducation: () => dispatch(actions.getEducation()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);