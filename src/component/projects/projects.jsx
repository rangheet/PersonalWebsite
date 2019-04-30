import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import {Tabs,Tab,Paper,Grid,Chip,Typography} from '@material-ui/core';
import "../../main-component.css";
import "./projects.css";

let tab = Object.freeze({Academic: 0, Personal: 1});
class Projects extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            projectTab: tab.Academic
        };
        this.switchTab=this.switchTab.bind(this);
    }


    componentDidMount()
    {
        this.props.getProjects();
    }

    switchTab(event, value){
        this.setState({projectTab: value});
    }

    render()
    {
        let projects=this.props.projects.allProjects;
        let displayProjects=[]
        if(this.state.projectTab===tab.Academic)
            displayProjects = this.props.projects.academicProjects;
        else    
            displayProjects = this.props.projects.personalProjects;

        return (
            <div className="projectsWrapperDiv">
                <Typography variant="h4" color="inherit" align="left" className="sectionHeader">
                            Projects:
                </Typography>

                <Tabs value={this.state.projectTab} onChange={this.switchTab}>
                    <Tab label="Academic" style={{outline: "none"}}/>
                    <Tab label="Personal" style={{outline: "none"}}/>
                </Tabs>
                    
                
                {displayProjects.map((project,index) => 
                    <Fragment key={index.toString()}> 
                        <Paper square className="commonPaper" elevation={0} >
                            <Typography variant="h5" color="inherit" align="left">
                                {project.title}
                            </Typography>
                            {this.state.projectTab===tab.Academic && 
                                <Grid container direction="row">
                                    <Grid item>
                                        <i className="material-icons">school</i>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" color="inherit" className="projectCompany secondHeading">
                                            {project.company}
                                        </Typography>
                                    </Grid>
                                </Grid>}        
                            <Typography variant="body1" color="inherit" className="projectDescription">
                                Description: {project.projectDescription.map((descriptionItem,index) => 
                                                            <li key={index}>{descriptionItem}</li>
                                )}
                            </Typography>
                            <Grid container direction="row">
                                {project.technologies.map((technology, index) => 
                                    <Grid item key={index}>
                                        <Chip label={technology} className="commonChip"/>                                                                
                                    </Grid>
                                )}
                            </Grid>
                        </Paper>
                    </Fragment>)}
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { projects: state.projects }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getProjects: () => dispatch(actions.getProjects()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);