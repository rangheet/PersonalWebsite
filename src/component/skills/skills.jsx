import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { LinearProgress, Tabs, Tab, Typography, Chip } from "@material-ui/core";
import "./skills.css";
import { relative } from "path";

const tabs = Object.freeze({Language: 0, WebTech: 1, DevOpsTools: 2, PM: 3});

class Skills extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            skillTabs: tabs.Language
        };
        this.handleChange=this.handleChange.bind(this);    
    }

    componentDidMount()
    {
        this.props.getSkills();
    }

    handleChange(event, value)
    {
        this.setState({skillTabs: value});
    }

    render()
    {
        let skills=null;

        if(this.state.skillTabs==tabs.Language)
        {
            skills=this.props.skills.languageSkills;
        }
        else if(this.state.skillTabs==tabs.WebTech)
        {
            skills=this.props.skills.webTechSkills;
        }
        else if(this.state.skillTabs==tabs.PM)
        {
            skills=this.props.skills.PMSkills;
        }
        else
        {
            skills=this.props.skills.DevOpsTools;
        }

        return (
            <div className="skillsWrapper">
                    <Typography variant="h4" color="inherit" className="sectionHeader">
                        Skills:
                    </Typography>

                    <Tabs value={this.state.skillTabs} onChange={this.handleChange}>
                        <Tab label="Languages" style={{outline: "none"}}/>
                        <Tab label="Web Technologies" style={{outline: "none"}}/>
                        <Tab label="DevOps Tools" style={{outline: "none"}}/>
                        <Tab label="Other" style={{outline: "none"}}/>
                    </Tabs>
                    <div className="skillsBarOuterDiv">
                       {skills.map((skill,index) => <div key={index.toString()} className="skillBar"> 
                                                            <i class="material-icons" style={{top: "4px", position: "relative"}}> subdirectory_arrow_right </i>
                                                            {/* <Chip color="default" label={skill.name}/> */}
                                                            {skill.name}
                                                            
                                                            {/* <LinearProgress variant="determinate" value={skill.ratingOutOf10 * 10} className="linearProgressBar" /> */}
                                                    </div>)}
                    </div>

                </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { skills: state.skills }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getSkills: () => dispatch(actions.getSkills()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);