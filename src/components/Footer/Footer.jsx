import React, {useEffect} from 'react';
import progressIcon from "./images/progress-icon.png";
import trainIcon from "./images/train-icon.png";
import profileIcon from "./images/profile-icon.png";
import eatIcon from "./images/eat-icon.png";
import rankIcon from "./images/rank-icon.png";
import "./footer.css";
import {Link, useLocation} from "react-router-dom";

const footerItems = [
    {img: eatIcon, route: "/temp", text: "temp"},
    {img: progressIcon, route: "/progress", text: "Progress"},
    {img: trainIcon, route: "/train", text: "Train"},
    {img: profileIcon, route: "/profile", text: "Profile"},
    {img: eatIcon, route: "/eat", text: "Eat"},
    {img: rankIcon, route: "/rank", text: "Rank"},
    {img: eatIcon, route: "/temp", text: "temp"}

]

const Footer = () => {
    const currentPage = useLocation();

    useEffect(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        if (scrollContainer && footerItems.length) {
            const selectedElement = document.querySelector('.selected');
            if (selectedElement) {
                const containerWidth = scrollContainer.offsetWidth;
                const elementWidth = selectedElement.offsetWidth;
                const elementOffsetLeft = selectedElement.offsetLeft;

                const scrollPosition = elementOffsetLeft - (containerWidth / 2) + (elementWidth / 2);

                scrollContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, []);

    return (
        <section id="footer">
            <footer>
                <div className="scroll-container">
                    {footerItems.map(item =>
                        <div key={item.route} className="footer-item">
                            <Link
                                className={"link" + (currentPage.pathname === item.route ? " selected" : "")}
                                to={item.route}
                            >
                                <img src={item.img} alt={`${item.text} icon`}/>
                                <p>{item.text}</p>
                            </Link>
                        </div>
                    )}
                </div>
            </footer>
        </section>
    );
};

export default Footer;