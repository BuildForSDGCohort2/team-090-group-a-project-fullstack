import React from 'react';
import {Style} from './classroom.styles';
import {makeStyles, Typography, Grid, Container, CssBaseline } from '@material-ui/core';
import { ReactComponent as UserMenu } from '../../assets/image.svg';

const useStyles = makeStyles({
	firstGrid: {
		display: "flex", 
		justifyContent: "space-between", 
		flexWrap: "nowrap",	
        alignItems: "center",
        background: "linear-gradient(180deg, #DF3131 0%, rgba(238, 147, 147, 0.525424) 55.08%, rgba(255, 255, 255, 0) 100%), #787FC4;",
        padding: "35px",
        borderRadius: "16px 16px 0px 0px",
        marginBottom: "0",
        marginTop: "4em"
    },
    
    userImage: {
        transform: "scale(3)",
        marginRight: "35px"
    },

    secondColumn: {
        marginTop: "0",
        background: "white",
        padding: "7px 7px 7px 26px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "0px 0px 16px 16px",
    },

    secondSection: {
        display: "flex", 
		justifyContent: "space-between", 
		flexWrap: "wrap",	
        alignItems: "flexStart",
        padding: "35px",
        borderRadius: "16px 16px 0px 0px",
    },

    works: {
        border: "solid red 1px",
        width: "100%",
        height: "200px",
        borderRadius: "15px",
    },

    interactions: {
        border: "solid red 1px",
        width: "100%",
        height: "300px",
        borderRadius: "15px",
    },
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
                <Grid container spacing={3} className = {classes.secondSection}>
                    <Grid item xs = {4} >
                        <div className ={classes.works}>

                        </div>
                    </Grid>
                    <Grid item xs={8} >
                        <div className ={classes.interactions}>

                        </div>
                    </Grid>
                </Grid>
            </Container>
            <CssBaseline />
        </Style>
    );
}

export default ClassroomPage;