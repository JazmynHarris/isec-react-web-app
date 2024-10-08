/**
 * This navigates to different parts of the website.
 */

import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdDraw } from "react-icons/md";
import { ImDrawer } from "react-icons/im";
import { FaCircleInfo } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
    // const { pathname } = useLocation();
    const links = [
        { label: "About", path: "About", icon: FaCircleInfo },
        { label: "Create", path: "Create", icon: MdDraw },
        { label: "Drawings", path: "Drawings", icon: ImDrawer },
        { label: "Profile", path: "Profile", icon: CgProfile },
        { label: "Settings", path: "Settings", icon: IoSettingsSharp },
    ];

    return (
        <div id="isec-navigation">
            {links.map((link) => (
                <div>
                    <button className="btn btn-lg btn-primary">
                        <a href={`#/${link.path.toLowerCase()}`} className={`list-group-item border border-0`}>{link.label}</a>
                    </button>
                    
                </div>
            ))}
 
        </div>
    )
}