import React from "react";
import "./OurTeam.css";

interface TeamMember {
  imgSrc: string;
  name?: string;
  description: string;
}

interface OurTeamProps {
  teamMembers: TeamMember[];
  paragraph: boolean;
}

const OurTeam: React.FC<OurTeamProps> = ({ teamMembers, paragraph }) => {
  return (
    <div className="wrapper">
      <div className="logo-container">
        <img src="/img/logo.png" alt="" className="logo" />
        {paragraph && (
          <p className="paragraph1">
            What if the way we respond to the planetary and human crisis is part
            of the crisis?
          </p>
        )}
      </div>

      <div className="vertical-semi-circle-container">
        <ul className="vertical-semi-circle-list">
          {teamMembers.map((member, index) => (
            <li key={index}>
              <img src={member.imgSrc} alt={`Image of ${member.name}`} />
              <div>
                <h2>{member.name?.toLowerCase()}</h2>
                <p>{member.description.toLowerCase()}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurTeam;
