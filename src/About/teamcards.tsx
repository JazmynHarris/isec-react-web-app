export default function TeamCards() {
    const members = [
        {
            firstName: "Alexandros", lastName: "Paliouras", major: "Engineer",
            description: "This is the description of Alexandros and what he has contributed to this project"
        },
        {
            firstName: "Armany", lastName: "Peguero", major: "Engineer",
            description: "This is the description of Armany and what he has contributed to this project"
        },
        {
            firstName: "Daniel", lastName: "Flynn", major: "Engineer",
            description: "This is the description of Daniel and what he has contributed to this project"
        },
        {
            firstName: "Jazmyn", lastName: "Harris", major: "Computer Engineering and Computer Science",
            description: "This is the description of Jazmyn and what she has contributed to this project"
        },
        {
            firstName: "Tyler", lastName: "Exilien", major: "Engineer",
            description: "This is the description of Tyler and what he has contributed to this project"
        }
    ]
    return (
        <div className="">
            <h3>Meet Our Team</h3>
            

            <div id="teamCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#teamCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#teamCarousel" data-slide-to="1"></li>
                    <li data-target="#teamCarousel" data-slide-to="2"></li>
                    <li data-target="#teamCarousel" data-slide-to="3"></li>
                    <li data-target="#teamCarousel" data-slide-to="4"></li>
                    <li data-target="#teamCarousel" data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="group-photo.jpeg" alt="Group Photo" className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>ISEC Group</h5>
                            <p>A quick description of the group</p>
                        </div>
                        {/* <h5 className="">ISEC Group</h5>
                        <p className="">A quick description of the group</p> */}
                    
                    </div>
                    {
                        members.map((member) => (
                            <div className="carousel-item">
                                <img src="missing-pic.jpeg" alt={`${member.firstName}'s Profile Picture`} className="d-block w-100" style={{ width: 200 }} />
                                {/* <h5 className="">{member.firstName} {member.lastName}</h5>
                                <span className=" mb-2 text-muted">{member.major}</span>
                                <p className="">{member.description}</p> */}
                            </div>
                        ))
                    }
                </div>
                <a className="carousel-control-prev" href="#teamCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#teamCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* <div className="row">
                {
                    members.map((member) => (
                        <div className="col-auto col-md-6">
                            <div className="card m-2 p-2">
                                <img src="missing-pic.jpeg" alt={`${member.firstName}'s Profile Picture`} style={{width: 200}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{member.firstName} {member.lastName}</h5>
                                    <span className="card-subtitle mb-2 text-muted">{member.major}</span>
                                    <p className="card-text">{member.description}</p>
                                </div>
                            </div>
                        </div>
                        
                    ))
                }
            </div> */}
        </div>
    );
}