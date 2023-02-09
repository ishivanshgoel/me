import React from "react";
import "./css/index.css";
import ExperienceCard from "./ExperienceCard";
import IndexControllerComponent from "../../components/ItemControllerComponent";

const experiences = [
  {
    companyName: "MathonGo",
    companyLogo: "",
    duration: "09/2022 - 12/2022",
    employmentType: "Internship",
    location: "Bangalore (Remote)",
    tasks: {
      "Analytics Platform":
        "Created a data pipeline to feed the analytics dashboard which is used to run marketing campaigns by correlating data or analyzing the user behavior across three different brands (platforms) of MathonGo.",
    },
    skills: {
      Stack: [
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "Cron Job",
        "GitHub Action",
      ],
      "Cloud Services": ["AWS Lambda", "AWS SQS", "EC2", "S3", "Cloudwatch"],
    },
  },
  {
    companyName: "MathonGo",
    duration: "09/2022 - 12/2022",
    employmentType: "Internship",
    location: "Bangalore (Remote)",
    tasks: {
      "Analytics Platform":
        "Created a data pipeline to feed the analytics dashboard which is used to run marketing campaigns by correlating data or analyzing the user behavior across three different brands (platforms) of MathonGo.",
    },
    skills: {
      Stack: [
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "Cron Job",
        "GitHub Action",
      ],
      "Cloud Services": ["AWS Lambda", "AWS SQS", "EC2", "S3", "Cloudwatch"],
    },
  },
  {
    companyName: "MathonGo",
    duration: "09/2022 - 12/2022",
    employmentType: "Internship",
    location: "Bangalore (Remote)",
    tasks: {
      "Analytics Platform":
        "Created a data pipeline to feed the analytics dashboard which is used to run marketing campaigns by correlating data or analyzing the user behavior across three different brands (platforms) of MathonGo.",
    },
    skills: {
      Stack: [
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "Cron Job",
        "GitHub Action",
      ],
      "Cloud Services": ["AWS Lambda", "AWS SQS", "EC2", "S3", "Cloudwatch"],
    },
  },
  {
    companyName: "MathonGo",
    duration: "09/2022 - 12/2022",
    employmentType: "Internship",
    location: "Bangalore (Remote)",
    tasks: {
      "Analytics Platform":
        "Created a data pipeline to feed the analytics dashboard which is used to run marketing campaigns by correlating data or analyzing the user behavior across three different brands (platforms) of MathonGo.",
    },
    skills: {
      Stack: [
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "Cron Job",
        "GitHub Action",
      ],
      "Cloud Services": ["AWS Lambda", "AWS SQS", "EC2", "S3", "Cloudwatch"],
    },
  },
  {
    companyName: "MathonGo",
    duration: "09/2022 - 12/2022",
    employmentType: "Internship",
    location: "Bangalore (Remote)",
    tasks: {
      "Analytics Platform":
        "Created a data pipeline to feed the analytics dashboard which is used to run marketing campaigns by correlating data or analyzing the user behavior across three different brands (platforms) of MathonGo.",
    },
    skills: {
      Stack: [
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "Cron Job",
        "GitHub Action",
      ],
      "Cloud Services": ["AWS Lambda", "AWS SQS", "EC2", "S3", "Cloudwatch"],
    },
  },
  {
    companyName: "MathonGo",
    duration: "09/2022 - 12/2022",
    employmentType: "Internship",
    location: "Bangalore (Remote)",
    tasks: {
      "Analytics Platform":
        "Created a data pipeline to feed the analytics dashboard which is used to run marketing campaigns by correlating data or analyzing the user behavior across three different brands (platforms) of MathonGo.",
    },
    skills: {
      Stack: [
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "Cron Job",
        "GitHub Action",
      ],
      "Cloud Services": ["AWS Lambda", "AWS SQS", "EC2", "S3", "Cloudwatch"],
    },
  },
];

function ExperiencePage() {

  // get array of experience cards
  function getExperienceCards() {
    return experiences.map((experience) => (
      <ExperienceCard experience={experience} />
    ));
  }

  return <div className="experience_main">
    {
      getExperienceCards()[0]
    }
    <IndexControllerComponent/>
  </div>;
}

export default ExperiencePage;
