import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Proptypes from 'prop-types';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoutIcon from '@material-ui/icons/NavigateBefore';
import CreateClassroomIcon from '@material-ui/icons/Add';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';

import CreateClassroomComponent from '../create-class/create-class.component';
import VirtualClassroom from '../virtual-classroom/virtual-classroom.component';
import CustomAppBar from '../custom-app-bar/custom-app-bar.component';

import { HeaderContainer, UserMenuContainer, ClassroomMenuContainer, StyledMenuItem } from './header.styles';
import { selectActiveClassroom } from '../../redux/classroom/classroom.selector';

const Header = ({ currentUser, signOutStart, activeClassroom }) => {
	const [createClassroom, setCreateClassroom] = useState(false);
	const [userMenu, setUserMenu] = useState(null);
	const [classroomMenu, setClassroomMenu] = useState(null);
	const [virtualClassroom, setVirtualClassroom] = useState(false);
	const history = useHistory();

	const handleCreateClassroom = () => {
		setCreateClassroom(true);
		handleClassroomMenuClose()
	  };
	
	const handleCloseCreateClassroom = () => {
	setCreateClassroom(false);
	};

	const handleUserMenuClick = (event) => {
		setUserMenu(event.currentTarget);
	};

	const handleUserMenuClose = () => {
		setUserMenu(null);
	};

	const handleClassroomMenuClick = (event) => {
		setClassroomMenu(event.currentTarget);
	};

	const handleClassroomMenuClose = () => {
		setClassroomMenu(null);
	};

	const toggleVirtualClassroom = () => {
		virtualClassroom ? setVirtualClassroom(false) : setVirtualClassroom(true);
	}

	const handleNavigateToHomepage = () => {
		setVirtualClassroom(false);
		history.push('/')
	}

	const onSignoutStart = () => {
		handleUserMenuClose();
		signOutStart();
	}

	const appBarBrops = {
		handleNavigateToHomepage: handleNavigateToHomepage, 
		activeClassroom: activeClassroom,
		toggleVirtualClassroom: toggleVirtualClassroom,
		virtualClassroom: virtualClassroom,
		handleClassroomMenuClick: handleClassroomMenuClick,
		handleUserMenuClick: handleUserMenuClick,
		currentUser: currentUser
	}

	return (
		<HeaderContainer>
			{
				currentUser && !virtualClassroom &&
				<CustomAppBar {...appBarBrops} />
			}
			
				
			<UserMenuContainer
				id="user-menu"
				anchorEl={userMenu}
				keepMounted
				open={Boolean(userMenu)}
				onClose={handleUserMenuClose}
			>
				<StyledMenuItem>
					<ListItemIcon>
						<LogoutIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText 
						primary={`Logout ${currentUser && currentUser.displayName}`} 
						onClick={onSignoutStart}
					/>
				</StyledMenuItem>
			</UserMenuContainer>

			<ClassroomMenuContainer
				id="classroom-menu"
				anchorEl={classroomMenu}
				keepMounted
				open={Boolean(classroomMenu)}
				onClose={handleClassroomMenuClose}
			>
				<StyledMenuItem>
					<ListItemIcon>
						<CreateClassroomIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText primary="Create a classroom" onClick={handleCreateClassroom} />
				</StyledMenuItem>
			</ClassroomMenuContainer>

			<CreateClassroomComponent open={createClassroom} handleClose={handleCloseCreateClassroom} />
			{
				virtualClassroom && <VirtualClassroom {...appBarBrops}/>
			}
	   
		</HeaderContainer>
	);
	
} 

Header.propTypes = {
	currentUser: Proptypes.object,
	signOutStart: Proptypes.func
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	activeClassroom: selectActiveClassroom
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
