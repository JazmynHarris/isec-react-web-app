import Overview from "../About/overview";
import SideBar from "./sidebar";

/**
 * This is the home page of the website.
 * Users can navigate to the other sectiosn of the website here
 * It will contain concept images of the final project + the final project in action (video embedded)
 *      + short project description
 */
export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <div className="container">
                <div id="overview-header" className=" d-flex justify-content-start">
                    <Overview />
                </div>
            </div>
            
        </div>
    );
}