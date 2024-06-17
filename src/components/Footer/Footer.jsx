import React from 'react';
import {Link} from "react-router-dom";
import "./footer.css";
import RepeatingScroll from "../RepeatingScroll/RepeatingScroll";
import useIndexLocation from "../../hooks/useIndexLocation";
import {routes} from "../../router/routes";


const Footer = () => {
    const currentPageIndex = useIndexLocation();

    return (
        <section id="footer">
            <footer>
                <RepeatingScroll
                    surroundingBackup={4}
                    innerStyle={{padding: "3% 3% 1%", borderRadius: "15px"}}
                    selectedStyle={{
                        // TODO: Fix animation when using uppercase textTransform
                        // textTransform: "uppercase",
                        filter: "brightness(125%)",
                        color: "#dbd098"
                    }}
                    defaultIndex={currentPageIndex}
                >
                    {routes.map(item =>
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