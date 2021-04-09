import React, { Component } from 'react';
import RunwithitPic from '../images/runwithit-homepg.png';
import iGiftPic from '../images/iGift.png';
import NewsPic from '../images/news-for-you.jpg';

class Portfolio extends Component {
    render() { 
        return (
            <article id="portfolio">
                <h2 className="portfolio-heading">Portfolio</h2>
                <p className="app-name"><a href="https://run-with-it-app.vercel.app/" target="_blank">Run With It</a></p>
                <div className="group">
                    <div className="item">
                    <a href="https://run-with-it-app.vercel.app/" target="_blank"><img className="app-screenshot" src={RunwithitPic} alt="screenshot of 'Run With It' app" /></a>
                    </div>
                    <div className="app-content item">
                    <p>Run With It is a full-stack app built for runners. After creating an account and signing in, each user is able to set personal running goals to work towards. Users input the date, distance, time, and any notes for each run they go on, and Run With It utilizes the Chart.js plugin to create helpful graphs showing the user's progress.</p>
                    <p>Run With It was built using React and CSS on the frontend and interacts with a server created with Node.js, Express, and PostgreSQL.</p>
                    <p>View the <a href="https://github.com/JamesK-Projects/run-with-it-app" target="_blank">Client-side</a> and <a href="https://github.com/JamesK-Projects/run-with-it-server" target="_blank">Server-side</a> code on GitHub</p>
                    </div>
                </div>
                <hr />   
                    
                <p className="app-name"><a href="https://igift-app.vercel.app/" target="_blank">iGift</a></p>
                <div className="group-reverse">
                    <div className="item">
                    <a href="https://igift-app.vercel.app/" target="_blank"><img className="app-screenshot" src={iGiftPic} alt="screenshot of 'iGift' app" /></a>
                    </div>
                    <div className="app-content item">
                    <p>iGift is a full-stack web app that helps consumers with their holiday shopping by keeping track of what they buy and showing how it affects their budget. Users set a budget and input the prices for each gift they buy, and iGift updates their remaining budget as they go.</p>
                    <p>iGift utilizes React and CSS on the frontend and interacts with a server built with Node.js, Express, and PostgreSQL.</p>
                    <p>View the <a href="https://github.com/JamesK-Projects/igift-app" target="_blank">Client-side</a> and <a href="https://github.com/JamesK-Projects/igift-server" target="_blank">Server-side</a> code on GitHub</p>
                    </div>
                </div>
                <hr />

                <p className="app-name"><a href="https://jamesk-projects.github.io/News-For-You/" target="_blank">News For You</a></p>
                <div className="group">
                    <div className="item">
                    <a href="https://jamesk-projects.github.io/News-For-You/" target="_blank"><img className="app-screenshot" src={NewsPic} alt="screenshot of 'News For You' app" /></a>
                    </div>  
                    <div className="app-content item">
                    <p>News For You is a news app that allows a user to search for relevant news by displaying news articles and videos based on the user's search parameters.</p>
                    <p>News For You was built using HTML, CSS, JavaScript, and jQuery, and fetches data from the Contextual Web Search API the Youtube API.</p>
                    <p>View this project on <a href="https://github.com/JamesK-Projects/news-for-you" target="_blank">GitHub</a></p>
                    </div>
                </div>
                <hr />
                </article>
        );
    }
}
 
export default Portfolio;