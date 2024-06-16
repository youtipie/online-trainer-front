import React from 'react';
import progressIcon from "../../assets/images/progress-icon.png";
import trainIcon from "../../assets/images/train-icon.png";
import profileIcon from "../../assets/images/profile-icon.png";
import eatIcon from "../../assets/images/eat-icon.png";
import rankIcon from "../../assets/images/rank-icon.png";
import wholeIcon from "../../assets/images/whole-icon.png";
import mentalIcon from "../../assets/images/mental-icon.png";
import "./footer.css";
import {Link} from "react-router-dom";
import RepeatingScroll from "../RepeatingScroll/RepeatingScroll";

const footerItems = [
    {img: mentalIcon, route: "/mental", text: "Mental"},
    {img: progressIcon, route: "/progress", text: "Progress"},
    {img: trainIcon, route: "/train", text: "Train"},
    {img: profileIcon, route: "/profile", text: "Profile"},
    {img: eatIcon, route: "/eat", text: "Eat"},
    {img: rankIcon, route: "/rank", text: "Rank"},
    {img: wholeIcon, route: "/whole", text: "Whole"}
]

const Footer = () => {

    return (
        <section id="footer">
            <footer>
                <RepeatingScroll
                    surroundingBackup={4}
                    innerStyle={{padding: "3% 3% 1%", borderRadius: "15px"}}
                    selectedStyle={{
                        textTransform: "uppercase",
                        filter: "brightness(125%)",
                        color: "#dbd098"
                    }}
                >
                    {footerItems.map(item =>
                        <div className="footer-item">
                            <Link
                                className="link"
                                to={item.route}
                            >
                                <div className="footer-img-container">
                                    <img className="footer-img" src={item.img} alt={`${item.text} icon`}/>
                                </div>
                                <p>{item.text}</p>
                            </Link>
                        </div>
                    )}
                </RepeatingScroll>
            </footer>
        </section>
    );
};

export default Footer;