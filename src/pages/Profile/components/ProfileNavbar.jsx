import React from 'react';
import avatarImg from "../../../assets/images/avatar.png";
import settingsIcon from "../../../assets/images/settings-icon.png";
import "./profile-navbar.css"
import Progress from "../../../UI/Progress/Progress";


const ProfileNavbar = () => {
    return (
        <section id="stats">
            <nav>
                <img className="avatar-img" src={avatarImg} alt="Avatar"/>
                <div className="profile-rank-wrapper">
                    <h3 id="username">User #0</h3>
                    <h3 id="user-rank">Ранг 0</h3>
                    <div id="xp-progress">
                        <div className="progress-text">
                            <p className="current-rank">Холоп</p>
                            <p className="next-rank">Гетьман</p>
                        </div>
                        <Progress max={100} value={70}/>
                    </div>
                </div>
                <div className="settings">
                    <div>
                        <img src={settingsIcon} alt="Settings icon"/>
                    </div>
                    <h3>Settings</h3>
                </div>
            </nav>
        </section>
    )
}

export default ProfileNavbar;