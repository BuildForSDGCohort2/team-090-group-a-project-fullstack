import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles, AppBar, Toolbar, Grid, Typography, CssBaseline, Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { ReactComponent as Dots } from '../../assets/dots.svg';

{/*
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Proptypes from 'prop-types';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';
import { HeaderContainer, FlexContainer, MenuContainer, LogoContainer, OptionContainer, OptionsContainer } from './header.styles';
import { ReactComponent as Menu } from '../../assets/Hamburger.svg';
import { ReactComponent as UserMenu } from '../../assets/image.svg';
import { ReactComponent as Dots } from '../../assets/dots.svg';
*/}
{/*
const Header = ({ currentUser, signOutStart }) => (
	<HeaderContainer>
		<FlexContainer>
			<MenuContainer>
				<Menu className = "menu" />
			</MenuContainer>
			<LogoContainer>
				<Link exact to='/'>
					<h2>
						<span style={{color: "red"}}>s</span>
						<span style={{color: "red"}}>c</span>
						<span style={{color: "blue"}}>o</span>
						<span style={{color: "blue"}}>o</span>
						<span style={{color: "red"}}>l</span>
					</h2>
				</Link>
			</LogoContainer>
		</FlexContainer>
		
		
			!currentUser  ?
				(<OptionsContainer>
					<OptionContainer to='/'>Home</OptionContainer>
					<OptionContainer to='/login'>Sign In</OptionContainer>
					<OptionContainer to='/register'>Sign Up</OptionContainer>
				</OptionsContainer>
				) : 
				(
					<OptionsContainer>
						<OptionContainer onClick={() => signOutStart()} as={'div'} >Sign Out</OptionContainer>
					</OptionsContainer>
				)
		<OptionsContainer>
			<OptionContainer>
				<svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path></svg>
			</OptionContainer>
			<OptionContainer>
				<div className = "drop-down-container">
					<Dots className = "dots"/>
					<div className = "drop-down">
						<p>Create or Join Class</p>
					</div>
					<div tabIndex="0" className = "drop-down-menu">
						<div className = "link1"><Link to='/' >Create Class</Link></div>
						<div className = "link2"><Link to='/' >Join Class</Link></div>
					</div>
				</div>
			</OptionContainer>
			<OptionContainer>
				<UserMenu />
			</OptionContainer>
		</OptionsContainer>
   
	</HeaderContainer>
);


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
*/}

const useStyles = makeStyles({
	logoSide: {
		display: "flex", 
		justifyContent: "space-between", 
		flexWrap: "nowrap",	
		alignItems: "center",
	},

	logo: {
		textDecoration: "none",
	},

	menu: {
		display: "flex", 
		justifyContent: "space-between", 
		flexWrap: "nowrap",	
		alignItems: "center",
	}
})


function Header (){
	const classes = useStyles();
	return(
		<>
			<AppBar position = "sticky" color = "white" style = {{padding: "5px 0"}} >
				<Toolbar style = {{padding: "0"}} >
					<Grid container style = {{display: "flex", justifyContent: "space-between"}}>
						<Grid item style = {{margin: "auto 0", padding: "0"}} >
							<div className = {classes.logoSide}>
								<Grid item >
									<Button>
										<MenuRoundedIcon fontSize = "medium" style = {{margin: "5px", padding: "-5px"}} />
									</Button>
								</Grid>
								<Grid item style = {{marginLeft: "15px"}} >
									<Link exact to='/' className = {classes.logo}>										
										<Typography variant = "h4">
											<span style={{color: "red"}}>s</span>
											<span style={{color: "red"}}>c</span>
											<span style={{color: "blue"}}>o</span>
											<span style={{color: "blue"}}>o</span>
											<span style={{color: "red"}}>l</span>
										</Typography>
									</Link>
								</Grid>
							</div>
						</Grid>
						<Grid item style = {{margin: "auto 0", padding: "0"}}>
							<div className = {classes.menu}>
								<Button style = {{marginRight: "5px"}} >
									<Dots style = {{padding: "-5px"}} />
								</Button>
								<Button style = {{marginRight: "8px"}} >
									<PersonIcon fontSize = "large" style = {{padding: "-5px"}}/>
								</Button>
							</div>
							
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<CssBaseline />
		</>
	)
}
export default Header;
