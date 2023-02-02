import React from "react";
import "./css/index.css";

function EducationPage() {
  return (
    <div className="education_main">
      <div className="education_heading">EDUCATION</div>
      <div className="education_box">
        <div className="education_box_left">
          <div className="education_box_dot">•</div>
          <div className="education_box_border"></div>
        </div>
        <div className="education_box_content">
          <div className="education_box_degree">
            <h1>B. Tech. Electronics and Computer Engineering</h1>
          </div>
          <div className="education_box_school">
            <h2>🏫 Vellore Institute Of Technology</h2>
          </div>
          <div className="education_box_detail">
            <p>📅 <i>07/2019 - 05/2023</i></p>
            <p><i>CGPA:</i> 🤔</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
