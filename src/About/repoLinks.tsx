import { FaRaspberryPi } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

export default function Repositories() {
    const repos = [
        {
            name: "Drawing Program", description: "Description for the drawing app",
            link: "https://github.com/danwflynn/interactive-sec.git", icon: FaRaspberryPi
        },
        {
            name: "React Web App", description: "Description for the react web app",
            link: "https://github.com/JazmynHarris/isec-react-web-app.git", icon: FaReact
        },
        {
            name: "Node Server", description: "description for the node server",
            link: "", icon: FaNodeJs
        },
    ]
    return (
        <div className="container">
            <div className="row">
                <h3>Repositories</h3>
            </div>
            
            {
                repos.map((repo) => (
                    <div className="row m-3">
                        <div className="jumbotron bg-light border border-2 rounded-3">
                            <h1 className="display-4">{repo.name}</h1>
                            <p className="lead">{repo.description}</p>
                            <hr className="my-4" />
                            <p className="text-secondary">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p className="lead">
                                <a className="btn btn-primary btn-lg" href={repo.link} role="button">
                                    GO <span className="ml-5">{repo.icon({})} </span>
                                </a>
                            </p>
                        </div>
                    </div>
                ))
            }
            
            
        </div>
    );
}