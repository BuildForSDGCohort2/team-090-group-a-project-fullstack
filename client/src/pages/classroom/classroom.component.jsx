import React from 'react';
import {Style} from './classroom.styles';
import {makeStyles, Typography, Grid, Container, CssBaseline } from '@material-ui/core';
import { ReactComponent as UserMenu } from '../../assets/image.svg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
	firstGrid: {
		display: "flex", 
		justifyContent: "space-between", 
		flexWrap: "nowrap",	
        alignItems: "center",
        background: "linear-gradient(180deg, #DF3131 0%, rgba(238, 147, 147, 0.525424) 55.08%, rgba(255, 255, 255, 0) 100%), #787FC4;",
        padding: "35px 35px 35px 20px",
        borderRadius: "16px 16px 0px 0px",
        marginBottom: "0",
        marginTop: "2em"
    },
    
    userImage: {
        transform: "scale(3)",
        marginRight: "35px"
    },

    secondColumn: {
        marginTop: "0",
        background: "white",
        padding: "7px 7px 7px 14px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "0px 0px 16px 16px",
    },

    secondSection: {
        display: "flex", 
		justifyContent: "space-between", 
        flexWrap: "wrap",	
        alignItems: "flexStart",
        borderRadius: "16px 16px 0px 0px",
        marginTop: "4em",
    },

    works: {
        height: "200px",
        width: "20%",
        minWidth: "200px",
        padding: "26px 0px"
    },

    interactions: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "330px",
        width: "78%",
        minWidth: "300px",
    },

    workBox: {
        width: "100%",
        height: "150px",
        border: "0.5px solid #000000",
        borderRadius: "15px",
        padding: "15px 20px"
    },

    link: {
        marginTop: "40px",
        float: "right"
    },

    inputBox: {
        width: "100%",
        height: "90px",
        border: "0.5px solid #000000",
        boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        padding: "15px 20px",
    },

    interactStudents: {
        width: "100%",
        height: "170px",
        border: "0.5px solid #000000",
        borderRadius: "15px",
        padding: "15px 20px",
    }
})



function ClassroomPage () {
    const classes = useStyles();
    return (
        <Style>
            <Container
                container
                direction="column"
                justify="center"
                alignItems="stretch"
            >
                <Grid
                    container
                    className = {classes.firstGrid} 
                >
                    <Grid>
                        <Typography
                        variant = "h4"
                        >
                            Lecturer Name
                        </Typography>
                        <Typography
                        variant = "h6">
                            Section
                        </Typography>
                        <Typography>
                            Class Code
                        </Typography>
                    </Grid>
                    <UserMenu className = {classes.userImage} />
                </Grid>
                
                <Grid 
                className = {classes.secondColumn}
                >
                    <Typography style = {{padding: "0", margin: "8px"}}>
                        Subject
                    </Typography>
                    <Typography style = {{padding: "0", margin: "8px"}}>
                    Lecture room
                    </Typography>
                </Grid>
            </Container>
            <Container
                container
                direction="column"
                justify="center"
                alignItems="stretch"
            >
                <div className = {classes.secondSection} >
                    <div className ={classes.works} >
                        <div className = {classes.workBox}>
                            <Typography variant = "h6">
                                Works
                            </Typography>
                            <Typography variant = "title">
                                You have no Unfinished Work
                            </Typography>
                            <Link to = '/' className = {classes.link}>
                                View All
                            </Link>
                        </div>
                    </div>
                    <div className ={classes.interactions} >
                        <div className = {classes.inputBox}  style = {{display: "flex", alignItems: "center", flexDirection: "row"}}>
                            <UserMenu  style = {{marginRight: "2em", transform: "scale(1.4)"}} />
                            <span>Share your thoughts with your students</span>
                        </div>
                        <div className = {classes.interactStudents}>
                            <Typography variant = "h5">
                                Interact with Students Here
                            </Typography>
                            <Typography variant="title">
                                <br />1. Create and share information with students <br />2. Reply students’ post
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
            <CssBaseline />
        </Style>
    );
}

export default ClassroomPage;