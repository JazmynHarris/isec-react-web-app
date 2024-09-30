import About from "../About";
import Create from "../Create";
import Drawings from "../Drawings";
import { Routes, Route, Navigate } from "react-router";
import Profile from "../Profile";
import Settings from "../Settings";
import Navigation from "../Navigation";

/**
 * This is the home page of the website.
 * Users can navigate to the other sectiosn of the website here
 * It will contain concept images of the final project + the final project in action (video embedded)
 *      + short project description
 */
export default function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <Navigation />
            <Routes>
                <Route path="About" element={ <About />} />
                <Route path="Create" element={<Create/>} />
                <Route path="Drawings" element={<Drawings />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="Settings" element={<Settings />} />
            </Routes>
        </div>
    );
}