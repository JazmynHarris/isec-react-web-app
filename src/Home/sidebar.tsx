import { Link, Route, Routes } from "react-router-dom";
import Overview from "../About/overview";
import TeamCards from "../About/teamcards";
import Repositories from "../About/repoLinks";
import Documentation from "../About/documentation";

export default function SideBar() {
    const links = ["Home", "About", "Create", "Drawings", "Profile"]
    return (
        <div>
            {/* ISEC       HOME     ABOUT     CREATE     DRAWINGS     PROFILE */}
            <div className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-primary z-2" style={{ width: "100%", height: 75 }}>
                <div className="col-2 float-start d-flex align-items-center justify-content-center" style={{ width: "37.5%", height: 75 }}>
                    <a href="">
                        <div className="row-3 text-white">ISEC</div>
                    </a>
                </div>
                {
                    links.map((link) => (
                        <div className="col-2 float-start d-flex align-items-center justify-content-center" style={{ width: "12.5%", height: 75 }}>
                            <Link to={`/${link.toLowerCase()}`} >
                                <div className="row-3 text-white">{link.toUpperCase()}</div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
}