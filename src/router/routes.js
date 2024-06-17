import mentalIcon from "../assets/images/mental-icon.png";
import progressIcon from "../assets/images/progress-icon.png";
import trainIcon from "../assets/images/train-icon.png";
import profileIcon from "../assets/images/profile-icon.png";
import eatIcon from "../assets/images/eat-icon.png";
import rankIcon from "../assets/images/rank-icon.png";
import wholeIcon from "../assets/images/whole-icon.png";
import Train from "../pages/Train/Train";
import Profile from "../pages/Profile/Profile";
import Eat from "../pages/eat/Eat";

export const routeNames = {
    MENTAL: "/mental",
    PROGRESS: "/progress",
    TRAIN: "/train",
    PROFILE: "/profile",
    EAT: "/eat",
    RANK: "/rank",
    WHOLE: "/whole"
}

export const routes = [
    {img: mentalIcon, route: routeNames.MENTAL, text: "Mental", exact: true, component: null},
    {img: progressIcon, route: routeNames.PROGRESS, text: "Progress", exact: true, component: null},
    {img: trainIcon, route: routeNames.TRAIN, text: "Train", exact: true, component: <Train/>},
    {img: profileIcon, route: routeNames.PROFILE, text: "Profile", exact: true, component: <Profile/>},
    {img: eatIcon, route: routeNames.EAT, text: "Eat", exact: true, component: <Eat/>},
    {img: rankIcon, route: routeNames.RANK, text: "Rank", exact: true, component: null},
    {img: wholeIcon, route: routeNames.WHOLE, text: "Whole", exact: true, component: null}
]