import React from 'react';
import { connect } from 'react-redux';

import { BackdropContainer } from './backdrop.styles';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo.component'

import { googleSignInStart } from '../../redux/user/user.action';

function Backdrop({ googleSignInStart }){
    return(
        <BackdropContainer>
            <div className="box">
                <Logo />
                <p>You never have to miss a class with Scool, you can learn and teach from anywhere. <Link to='/'>Learn more</Link></p>
                
                <button onClick={googleSignInStart}>Continue with google</button>
            </div>
        </BackdropContainer>
    )
}


const mapDispatchToProps = (dispatch) =>({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(Backdrop)