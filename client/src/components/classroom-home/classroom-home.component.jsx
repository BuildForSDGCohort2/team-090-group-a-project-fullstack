import React from 'react';
import { Typography, Grid, Container, CssBaseline } from '@material-ui/core';
import { ReactComponent as UserMenu } from '../../assets/image.svg';

import { ClassroomHomeContainer, FirstGrid, SecondGrid, SecondSection, ClassworkContainer, InteractionsContainer, InteractionBoxContainer, InputBoxContainer, WorkBoxContainer, LinkContainer, UserMenuContainer } from './classroom-home.styles'


const ClassroomHome = () => {
    return (
        <ClassroomHomeContainer>
            <Container
                container
                direction="column"
                justify="center"
                alignItems="stretch"
            >
                <FirstGrid
                    container
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
                    <UserMenuContainer />
                </FirstGrid>
                
                <SecondGrid>
                    <Typography style = {{padding: "0", margin: "8px"}}>
                        Subject
                    </Typography>
                    <Typography style = {{padding: "0", margin: "8px"}}>
                    Lecture room
                    </Typography>
                </SecondGrid>
            </Container>
            <Container
                container
                direction="column"
                justify="center"
                alignItems="stretch"
            >
                <SecondSection>
                    <ClassworkContainer >
                        <WorkBoxContainer>
                            <Typography variant = "h6">
                                Works
                            </Typography>
                            <Typography variant = "title">
                                You have no Unfinished Work
                            </Typography>
                            <LinkContainer to = '/'>
                                View All
                            </LinkContainer>
                        </WorkBoxContainer>
                    </ClassworkContainer>
                    <InteractionsContainer >
                        <InputBoxContainer style = {{display: "flex", alignItems: "center", flexDirection: "row"}}>
                            <UserMenu  style = {{marginRight: "2em", transform: "scale(1.4)"}} />
                            <span>Share your thoughts with your students</span>
                        </InputBoxContainer>
                        <InteractionBoxContainer>
                            <Typography variant = "h5">
                                Interact with Students Here
                            </Typography>
                            <Typography variant="title">
                                <br />1. Create and share information with students <br />2. Reply students’ post
                            </Typography>
                        </InteractionBoxContainer>
                    </InteractionsContainer>
                </SecondSection>
            </Container>
            <CssBaseline />
        </ClassroomHomeContainer>
    );
}


export default ClassroomHome;