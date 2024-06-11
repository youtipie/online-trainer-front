import React from 'react';
import progressIcon from "./images/progress-icon.png";
import trainIcon from "./images/train-icon.png";
import profileIcon from "./images/profile-icon.png";
import eatIcon from "./images/eat-icon.png";
import rankIcon from "./images/rank-icon.png";
import "./footer.css";


const Footer = () => {
    return (
        <section id="footer">
            <footer>
                <div className="footer-item">
                    <img src={progressIcon} alt="progress icon"/>
                    <p>Progress</p>
                </div>
                <div className="footer-item">
                    <img src={trainIcon} alt="progress icon"/>
                    <p>Training</p>
                </div>
                <div className="footer-item selected">
                    <img src={profileIcon} alt="progress icon"/>
                    <p>Profile</p>
                </div>
                <div className="footer-item">
                    <img src={eatIcon} alt="progress icon"/>
                    <p>Eat</p>
                </div>
                <div className="footer-item">
                    <img src={rankIcon} alt="progress icon"/>
                    <p>Rank</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;