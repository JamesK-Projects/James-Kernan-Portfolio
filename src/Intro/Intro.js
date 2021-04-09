import React, { Component } from 'react';
import IntroPic from '../images/snow.jpg';

class Intro extends Component {
    render() { 
        return (
            <div className="intro">
                <div className="group">
                    <div className="item">
                        <img className="round-pic" src={IntroPic} alt="hiking-in-snow" />
                    </div>
                    <div className="item">
                        <h2>Hello!</h2>
                        <p>I'm James, a Software Developer based out of Salt Lake City, UT. I have a background in Mechanical Engineering, but I recently made the switch to being a full-time Software Developer and I love what I do!</p>
                        <p>I specialize in creating full-stack interactive apps and websites. As a new developer, I'm always eager to take on new projects and learn new things along the way! </p>
                        <p>Please take a look at some of the <a href="#portfolio">apps</a> that I've created, and let me know what you think!</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Intro;