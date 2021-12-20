import React from 'react';
import './About.css';

function About() {
    return (
        <>
            <div className="about__section">
                <div className="about__wrapper">
                    <h1 className="about__heading">About this website</h1>

                    <p>This website is created as a practice personal project using React as frontend, and Express as backend.</p>
                    <p>React tutorial followed from <a href="https://www.youtube.com/watch?v=3nLTB_E6XAM">here</a>.</p>
                    <p>Express tutorial followed from <a href="https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/">
                        here</a> and <a href="https://www.youtube.com/watch?v=kJA9rDX7azM">here</a>.</p>

                    <br/>

                    <br/>
                    <p>This is my <a href="https://github.com/lohszeying/genshin-calculator">Github</a>. Frontend is deployed and hosted with Firebase, and backend is deployed and hosted with Heroku.</p>

                    <br/>
                    <br/>
                    <p>Genshin Impact is a trademark of miHoYo.</p>

                </div>
            </div>
        </>
    )
}

export default About;