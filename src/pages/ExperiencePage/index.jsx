import React, { useState, useCallback } from "react";
import "./css/index.css";
import ExperienceCard from "./ExperienceCard";
import IndexControllerComponent from "../../components/ItemControllerComponent";

const experiences = [
  {
    companyName: "MathonGo 1",
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
    companyName: "MathonGo 2",
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
    companyName: "MathonGo 3",
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
    companyName: "MathonGo 4",
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
    companyName: "MathonGo 5",
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
    companyName: "MathonGo 6",
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
  const [page, setPage] = useState(0);

  // get array of experience cards
  function getExperienceCards() {
    return experiences.map((experience) => (
      <ExperienceCard experience={experience} />
    ));
  }

  // to set page number in child component
  const wrapperSetPage = useCallback(
    (pageNumber) => {
      if (pageNumber < experiences.length && pageNumber >= 0) {
        setPage(pageNumber);
      }
    },
    [setPage]
  );

  return (
    <div className="experience_main">
      {getExperienceCards()[page]}
      <IndexControllerComponent page={page} wrapperSetParent={wrapperSetPage} />
    </div>
  );
}

export default ExperiencePage;
