import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoutIcon from '@material-ui/icons/NavigateBefore';
import JoinClassroomIcon from '@material-ui/icons/Group';
import CreateClassroomIcon from '@material-ui/icons/Add';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';

import { HeaderContainer, FlexContainer, LogoContainer, OptionContainer, OptionsContainer, StyledMenu, StyledMenuItem } from './header.styles';
import { ReactComponent as UserMenu } from '../../assets/image.svg';
import Logo from '../logo/logo.component';

const Header = ({ currentUser, signOutStart }) => {
	const [userMenu, setUserMenu] = React.useState(null);
	const [classroomMenu, setClassroomMenu] = React.useState(null);

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

	const onSignoutStart = () => {
		handleUserMenuClose();
		signOutStart();
	}

	return (
		<HeaderContainer>
			<FlexContainer>
				<LogoContainer>
					<Link to='/'>
						<Logo />
					</Link>
				</LogoContainer>
			</FlexContainer>
			
			<OptionsContainer>
				<OptionContainer as="div"
					aria-controls="classroom-menu"
					aria-haspopup="true"
					onClick={handleClassroomMenuClick}
				>
					<svg className ="gb_cf" width="24" height="24" viewBox="0 0 24 24" fill="#5E5E5E"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
				</OptionContainer>
				<OptionContainer as="div"
					aria-controls="user-menu"
					aria-haspopup="true"
					onClick={handleUserMenuClick}
				>
					<UserMenu />
				</OptionContainer>
			</OptionsContainer>
	
			<StyledMenu
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
			</StyledMenu>

			<StyledMenu
				id="classroom-menu"
				anchorEl={classroomMenu}
				keepMounted
				open={Boolean(classroomMenu)}
				onClose={handleClassroomMenuClose}
			>
				<StyledMenuItem>
					<ListItemIcon>
						<JoinClassroomIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText primary="Join a classroom" />
				</StyledMenuItem>
				<StyledMenuItem>
					<ListItemIcon>
						<CreateClassroomIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText primary="Create a classroom" />
				</StyledMenuItem>
			</StyledMenu>
	   
		</HeaderContainer>
	);
	
} 

Header.propTypes = {
	currentUser: Proptypes.object,
	signOutStart: Proptypes.func
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
