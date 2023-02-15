import React, { useState, useCallback, useMemo } from "react";
import "./css/index.css";
import ExperienceCard from "./ExperienceCard";
import IndexControllerComponent from "../../components/ItemControllerComponent";

const experiences = [
  {
    companyName: "MathonGo (Backend Developer Intern)",
    companyLogo: "https://www.mathongo.com/public/brand/mathongo/social-card.png",
    duration: "09/2022 - 12/2022",
    employmentType: "Internship",
    location: "Bangalore (Remote)",
    tasks: {
      "Analytics Platform":
        "Created a data pipeline to feed the analytics dashboard which is used to run marketing campaigns by correlating data or analyzing the user behavior across three different brands (platforms) of MathonGo.",
    },
    skills: {
      Stack: "Typescript, Node.js, Express, MongoDB, Cron Job, GitHub Action",
      "Cloud Services": "AWS Lambda, AWS SQS, EC2, S3, Cloudwatch",
    },
    links: []
  },
  {
    companyName: "Microsoft (Software Engineer Intern)",
    companyLogo: "https://cdn.vox-cdn.com/thumbor/ba88KSux9BR4YxRoCDODtY6o95A=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/55639013/DSCF1179.0.0.jpg",
    duration: "05/2022 - 07/2022",
    employmentType: "Internship",
    location: "Hyderabad",
    tasks: {
      "Team": "Worked on the Incorporation of SBOM for Azure containers offer certification under the AzCertify team",
      "SBOM": "Started with the research having the goal of developing a POC for validating an SBOM.",
      "CPLAT": "Started with the research having the goal of developing a POC for validating an SBOM."
    },
    skills: {
      Stack: "C#, .NET"
    },
    links: []
  },
  {
    companyName: "Samsung (Prism Developer Intern)",
    companyLogo: "https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/256_144_4.png?$512_N_PNG$",
    duration: "06/2021 - 01/2022",
    employmentType: "Internship",
    location: "Bangalore",
    tasks: {
      "Worklet": "Worked on NLP Command Suggestions Worklet.",
      "Achievement": "Awarded with a Certificate of Excellence at the end of this program."
    },
    skills: {
      Stack: "Python, Flutter, Research"
    },
    links: []
  }
];

function ExperiencePage() {
  const [page, setPage] = useState(0);

  function getExperienceCards() {
    return experiences.map((experience) => (
      <ExperienceCard experience={experience} />
    ));
  }

  const experienceCards = useMemo(getExperienceCards, []);

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
      {experienceCards[page]}
      <IndexControllerComponent page={page} wrapperSetParent={wrapperSetPage} />
    </div>
  );
}

export default ExperiencePage;
