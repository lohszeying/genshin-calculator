import React from 'react';
import './About.css';

function About() {
    return (
        <>
            <div className="about__section">
                <div className="about__wrapper">
                    <h1 className="about__heading">About this website</h1>

                    <p>This website is created as a practice personal project using React. Website is under progress.</p>
                    <p>React tutorial followed from <a href="https://www.youtube.com/watch?v=3nLTB_E6XAM">here</a>.</p>

                    <br/>

                    <br/>
                    <p>This is my <a href="https://github.com/lohszeying/genshin-calculator">Github</a>. Website is hosted with Firebase.</p>

                    <br/>
                    <br/>
                    <p>Genshin Impact is a trademark of miHoYo.</p>

                </div>
            </div>
        </>
    )
}

export default About;