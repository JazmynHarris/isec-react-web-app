import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Overview from "./overview";
import TeamCards from "./teamcards";
import Repositories from "./repoLinks";
import Documentation from "./documentation";

/**
 * This is the section that describes the aims of this project and short autobiographies for the team members
 * It may also include all of the documentation for this project and our references
 */
export default function About() {
    const { pathname } = useLocation();
    const aboutLinks = [
        { label: "Overview", path: "/overview" , nickname: "overview"},
        { label: "Team", path: "/team" , nickname: "team"},
        { label: "Repositories", path: "/repos", nickname: "repos" },
        { label: "Documentation", path: "/docs", nickname: "docs"}];
    return (
        // About the project and the team
        // Cards for each team member
        // description of the project
        // maybe add documentation
        // references
        <div className="container">

            <h1>ABOUT ISEC</h1>

            

            <ul className="nav nav-pills">
                {
                    aboutLinks.map((link) => (
                        <li className="nav-item">
                            <a className={`nav-link ${pathname.includes(link.nickname) && "active"}`} href={`#/about${link.path}`}>{link.label}</a>
                        </li>
                    ))
                }
            </ul>

            <div className="">
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/team" element={<TeamCards />} />
                    <Route path="/repos" element={<Repositories />} />
                    <Route path="/docs" element={<Documentation />} />
                </Routes>
            </div>
            
            
            



            {/* tabs for overview, team cards, repos, documentation */}
        </div>
    );
}