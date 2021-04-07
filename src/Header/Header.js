import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return (
            <div className="header">
                <h1>JAMES KERNAN</h1>   
                <nav>
                    <a href="#about-me">About Me</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        );
    }
}
 
export default Header;