import React from 'react';
import {BackdropStyle} from './landing.styles';
import {Link} from 'react-router-dom';

function Backdrop(){
    return(
        <BackdropStyle>
            <div className = "box">
                <h2 className = "backdrop-logo">
                    <span style={{color: "red"}}>s</span>
                    <span style={{color: "red"}}>c</span>
                    <span style={{color: "blue"}}>o</span>
                    <span style={{color: "blue"}}>o</span>
                    <span style={{color: "red"}}>l</span>
                </h2>
                <p>Welcome, scool brings Knowledge to you! You never have to miss a Class, you can learn from wherever you may find yourself in. <Link exact to='/'>Learn more</Link></p>
                <hr />
                <button>Continue</button>
                </div>
        </BackdropStyle>
    )
}

export default Backdrop