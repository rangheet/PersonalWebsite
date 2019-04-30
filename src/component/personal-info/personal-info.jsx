import React, { Component } from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import "./personal-info.css";
import "../../main-component.css";
import { Grid, Typography, Button} from '@material-ui/core';
import { config } from "../../config";



const styles = {
};

class PersonalInfo extends Component{
    
    constructor(props)
    {
        super(props);
        this.state= {
            showBio: false
        };
        this.toggleShowBio=this.toggleShowBio.bind(this);
    }

    componentDidMount()
    {
        this.props.getPersonalInfo();
    }

    render()
    {
        return (
            <div id="PersonalInfo" className="wrapperDiv" href="#PersonalInfo">
                <Grid container spacing={16} justify="flex-end" className="linksContainer">
                    <Grid item>                                                                                     
                        <a href={this.props.logos.LinkedIn.url} target="_blank" ref="noopener"><img id="linkedin-logo" src={this.props.logos.LinkedIn.filenameOnServer ? config.StaticDataLoadingEndPoint+this.props.logos.LinkedIn.filenameOnServer : undefined} alt={this.props.logos.LinkedIn.logoname} /></a>
                    </Grid>
                    <Grid item> 
                        <a href={this.props.logos.Github.url} target="_blank" ref="noopener"><img id="github-logo" src={this.props.logos.Github.filenameOnServer ? config.StaticDataLoadingEndPoint+this.props.logos.Github.filenameOnServer : undefined} alt={this.props.logos.Github.logoname} /></a>
                    </Grid>       
                    <Grid item> 
                        <a href={this.props.logos.Email.url}><img id="email-logo" src={this.props.logos.Email.filenameOnServer ? config.StaticDataLoadingEndPoint+this.props.logos.Email.filenameOnServer : undefined} alt={this.props.logos.Email.logoname} /></a>
                    </Grid>           
                </Grid>
                
                <Grid container justify="center" className="headerButtonContainer" direction="column" alignItems="center">
                    <Grid item>
                        <Typography variant="h3" color="inherit" align="center">
                                {this.props.personalInfo.name}
                        </Typography>
                        {/* <Typography variant="h1" color="inherit" align="center" >
                            {this.props.personalInfo.name.toUpperCase()}
                        </Typography> */}
                    </Grid>
                    <Grid container justify="center" className="bioResumeButton">
                        <Grid item className="bioButton">
                            <Button id="bio-button" variant="outlined" color="inherit" onClick={()=>{this.toggleShowBio()}} style={{outline: "none"}}>
                                <Typography variant="button" color="inherit" align="center">
                                    Bio
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button id="resume-button" variant="outlined" color="inherit" href={config.StaticDataLoadingEndPoint + this.props.personalInfo.resume} target="_blank" ref="noopener" style={{outline: "none"}}>
                                <Typography variant="button" color="inherit" align="center">
                                    Resume
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item style={{marginTop: "5vh"}}>
                            { this.state.showBio && <Typography variant="body1" color="inherit" align="center" className="bioContainer">
                                {this.props.personalInfo.bio}
                            </Typography>
                            }
                        </Grid>
                    </Grid>                                           
                </Grid>
            </div>
        );
    }

    toggleShowBio(){
        this.setState({showBio: !this.state.showBio});
    }
    
}

function mapStateToProps(state)
{
    return { 
        personalInfo: state.personalInfo,
        logos: state.logos     
    };
}

function mapDispatchToProps(dispatch)
{
    return { getPersonalInfo: () => dispatch(actions.getPersonalInfoAction()) };
}

const PersonalInfoClass = connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);

export default PersonalInfoClass;