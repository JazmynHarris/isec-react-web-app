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
            
            <div className="row">
                {
                    members.map((member) => (
                        <div className="col-auto col-md-6 col-lg-4">
                            <div className="card m-2 p-2">
                                <img src="missing-pic.jpeg" alt={`${member.firstName}'s Profile Picture`}/>
                                <div className="card-body">
                                    <h5 className="card-title">{member.firstName} {member.lastName}</h5>
                                    <span className="card-subtitle mb-2 text-muted">{member.major}</span>
                                    <p className="card-text">{member.description}</p>
                                </div>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    );
}