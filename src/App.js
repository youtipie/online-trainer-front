import './App.css';
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import Train from "./pages/Train/Train";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Eat from "./pages/eat/Eat";

function App() {
    return (
        <>
            <div className="line line-top"></div>
            <div className="line line-bottom"></div>
            <BrowserRouter>
                <Footer/>
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/train" element={<Train/>}/>
                    <Route path="/eat" element={<Eat/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
