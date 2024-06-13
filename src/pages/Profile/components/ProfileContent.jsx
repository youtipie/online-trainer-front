import React from 'react';
import leftArrow from "../../../assets/images/left-arrow.png";
import rightArrow from "../../../assets/images/right-arrow.png";
import chad from "../../../assets/images/chad.png";
import "./profile-content.css";


const ProfileContent = () => {
    return (
        <section id="content">
            <h1>Гетьман</h1>
            <div className="photo-container">
                <img className="arrow"
                     src={leftArrow}
                     alt="Go left"
                />
                <img
                    className="chad-image"
                    src={chad}
                    alt="You"
                />
                <img
                    className="arrow"
                    src={rightArrow}
                    alt="Go right"
                />
            </div>
        </section>
    )
}


export default ProfileContent;