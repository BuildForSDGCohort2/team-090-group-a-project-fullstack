import React from 'react';
import { connect } from 'react-redux';

import { AuthenticationModalContainer } from './authentication-modal.styles';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo.component'

import { googleSignInStart } from '../../redux/user/user.action';

function AuthenticationModal({ googleSignInStart }){
    return(
        <AuthenticationModalContainer>
            <div className="box">
                <Logo />
                <p>You never have to miss a class with Scool, you can learn and teach from anywhere. <Link to='/'>Learn more</Link></p>
                
                <button onClick={googleSignInStart}>Continue with google</button>
            </div>
        </AuthenticationModalContainer>
    )
}


const mapDispatchToProps = (dispatch) =>({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(AuthenticationModal);