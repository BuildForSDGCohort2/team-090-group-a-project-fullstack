import React from 'react';
import {BackdropStyle, Button} from './landing.styles';
import {Link} from 'react-router-dom';

function Backdrop(){
    return(
        <BackdropStyle>
            <div className = "box">
                <div className = "first">
                    <h2 className = "backdrop-logo">
                        <span style={{color: "red"}}>s</span>
                        <span style={{color: "red"}}>c</span>
                        <span style={{color: "blue"}}>o</span>
                        <span style={{color: "blue"}}>o</span>
                        <span style={{color: "red"}}>l</span>
                    </h2>
                    <p>Welcome, scool brings Knowledge to you! You never have to miss a Class, you can learn from wherever you may find yourself in. <Link exact to='/'>Learn more</Link></p>
                </div>
                <hr />
                <div className = "last">
                    <Button> Continue</Button>
                    <p className = "below">By joining, you agree to share your contact info with people in your class. <Link exact to='/'>Learn more</Link></p>
                </div>
            </div>
        </BackdropStyle>
    )
}

export default Backdrop