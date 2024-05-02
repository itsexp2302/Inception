import React from "react";
import User from './User';
import UserClass from './UserClass';
const About = () => {

    //This will be class based component
    return(
        <div>
            <h1>About</h1>
            <h4>This is PANGS! Your Food delivery app!</h4>
            <User/>
        </div>
    )
}

export default About;