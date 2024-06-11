import React, {useState} from 'react';
import progressIcon from "./images/progress-icon.png";
import trainIcon from "./images/train-icon.png";
import profileIcon from "./images/profile-icon.png";
import eatIcon from "./images/eat-icon.png";
import rankIcon from "./images/rank-icon.png";
import "./footer.css";
import {Link} from "react-router-dom";

const footerItems = [
    {img: progressIcon, route: "/progress", text: "Progress"},
    {img: trainIcon, route: "/train", text: "Train"},
    {img: profileIcon, route: "/profile", text: "Profile"},
    {img: eatIcon, route: "/eat", text: "Eat"},
    {img: rankIcon, route: "/rank", text: "Rank"}
]

const Footer = () => {
    const [currentPage, setCurrentPage] = useState("/profile");

    return (
        <section id="footer">
            <footer>
                {footerItems.map(item =>
                    <div key={item.route} className="footer-item">
                        <Link
                            className={"link" + (currentPage === item.route ? " selected" : "")}
                            to={item.route}
                            onClick={() => setCurrentPage(item.route)}
                        >
                            <img src={item.img} alt={`${item.text} icon`}/>
                            <p>{item.text}</p>
                        </Link>
                    </div>
                )}
                {/*<div className="footer-item">*/}
                {/*    <Link*/}
                {/*        className="link"*/}
                {/*        to="/training"*/}
                {/*        onClick={() => setCurrentPage("/")}*/}
                {/*    >*/}
                {/*        <img src={trainIcon} alt="training icon"/>*/}
                {/*        <p>Training</p>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className="footer-item">*/}
                {/*    <Link*/}
                {/*        className="link"*/}
                {/*        to="/profile"*/}
                {/*        onClick={() => setCurrentPage("/")}*/}
                {/*    >*/}
                {/*        <img src={profileIcon} alt="profile icon"/>*/}
                {/*        <p>Profile</p>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className="footer-item">*/}
                {/*    <Link*/}
                {/*        className="link"*/}
                {/*        to="/eat"*/}
                {/*        onClick={() => setCurrentPage("/")}*/}
                {/*    >*/}
                {/*        <img src={eatIcon} alt="eat icon"/>*/}
                {/*        <p>Eat</p>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                {/*<div className="footer-item">*/}
                {/*    <Link*/}
                {/*        className="link"*/}
                {/*        to="/rank"*/}
                {/*        onClick={() => setCurrentPage("/")}*/}
                {/*    >*/}
                {/*        <img src={rankIcon} alt="rank icon"/>*/}
                {/*        <p>Rank</p>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </footer>
        </section>
    );
};

export default Footer;