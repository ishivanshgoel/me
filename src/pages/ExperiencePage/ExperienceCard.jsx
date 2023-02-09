import React from "react";
import "./css/expereinceCard.css";

// {
//   companyName: "MathonGo",
//   duration: "09/2022 - 12/2022",
//   employmentType: "Internship",
//   location: "Bangalore (Remote)",
//   tasks: {
//     "Analytics Platform":
//       "Created a data pipeline to feed the analytics dashboard which is used to run marketing campaigns by correlating data or analyzing the user behavior across three different brands (platforms) of MathonGo.",
//   },
//   skills: {
//     Stack: [
//       "Typescript",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Cron Job",
//       "GitHub Action",
//     ],
//     "Cloud Services": ["AWS Lambda", "AWS SQS", "EC2", "S3", "Cloudwatch"],
//   },
// },

function ExperienceCard({ experience }) {
  return (
    <div className="experience_card">
      <p className="experience_card_company_name">
        <b>Company: </b> {experience["companyName"]}
      </p>
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
      {Object.keys(experience["tasks"]).map((task) => (
        <p className="experience_card_tasks">
          <b> {task} </b>: {experience["tasks"][task]}
        </p>
      ))}
    </div>
  );
}

export default ExperienceCard;
