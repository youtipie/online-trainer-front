import React from 'react';
import leftArrow from "./images/left-arrow.png"
import rightArrow from "./images/right-arrow.png"
import chad from "./images/chad.png"

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