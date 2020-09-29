import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';

import { LogoContainer } from './custom-app-bar.styles'
import Logo from '../logo/logo.component';


const CustomAppBar = ({ handleNavigateToHomepage, activeClassroom, toggleVirtualClassroom, virtualClassroom, handleClassroomMenuClick, handleUserMenuClick, currentUser }) => (
    <AppBar position="relative" elevation={1} color={'transparent'} >
        <Toolbar>
            <LogoContainer onClick={handleNavigateToHomepage}>
                <Logo />
            </LogoContainer>
            <div className={'grow'} />
        <div className={'sectionDesktop'}>
            {
            activeClassroom ?	
                <IconButton aria-label="Join virtual classroom" 
                onClick={toggleVirtualClassroom}
                color="inherit">
                    {
                        virtualClassroom ? <VideocamOffIcon /> : <VideoCallIcon />
                    }
                </IconButton>
                :

                <IconButton aria-label="Create or Join Classroom" 
                    aria-controls="classroom-menu"
                    aria-haspopup="true"
                    onClick={handleClassroomMenuClick}
                    color="inherit">
                    <AddIcon />
                </IconButton>

            }
            <IconButton
                edge="end"
                aria-label={currentUser.name}
                color="inherit"
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={handleUserMenuClick}
            >
            <AccountCircle />
            </IconButton>
        </div>
        </Toolbar>
    </AppBar>
);

export default CustomAppBar;