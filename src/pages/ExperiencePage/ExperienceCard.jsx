import React from "react";
import "./css/expereinceCard.css";

function ExperienceCard({ experience }) {
  return (
    <div className="experience_card">
      <div className="experience_card_company_logo_container">
        <img
          className="experience_card_company_logo"
          src={experience["companyLogo"]}
        ></img>
      </div>
      <div className="experience_card_company_name_container">
        <p className="experience_card_company_name">
          {experience["companyName"]}
        </p>
      </div>
      <div className="experience_card_meta">
        <p className="experience_card_duration">
          Duration: {experience["duration"]}
        </p>
        <p className="experience_card_location">
          Location: {experience["location"]}
        </p>
      </div>
      <hr></hr>
      <p>
        <i>Tasks/ Achievements</i>
      </p>
      {Object.keys(experience["tasks"]).map((task, index) => (
        <p
          className="experience_card_tasks"
          key={index + "_" + task.toString()}
        >
          <b> {task} </b>: {experience["tasks"][task]}
        </p>
      ))}

      {Object.keys(experience["skills"]).map((skill, index) => (
        <p
          className="experience_card_tasks"
          key={index + "_" + skill.toString()}
        >
          <b> {skill} </b>: {experience["skills"][skill]}
        </p>
      ))}
      {
        (experience["links"] && experience["links"].length > 0) ? <b>Links: </b> : null
      }
      {
        experience["links"].map((link, index) => (
          <a href={link}>{link}</a>
        ))
      }
    </div>
  );
}

export default ExperienceCard;
