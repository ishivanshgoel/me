import React from "react";
import "./css/index.css";
import { shivanshImage } from "./img";

function HomePage() {
  return (
    <div className="homepage_main">
      <div className="homepage_main_left">
        <div className="homepage_main_left_intro">
          <h1>Hey, <span class="homepage_main_left_intro_wave">👋</span></h1>
          <div className="homepage_main_left_intro_name">
            <h2>I'm Shivansh Goel</h2>
            <p>@ishivanshgoel</p>
          </div>
          <p>
            👉 I am a Software Developer with strong passion for
            self-improvement. I love to develop new applications for social
            causes that can increase ease in human lives.
          </p>
          <p>
            👉 I have strong Problem Solving skills & bring energy, patience,
            positivity and cultural values to the team.
          </p>
          <p>
            👉 I love traveling and meeting people, some recent images from my
            travel gallery on the right :P
          </p>
        </div>
      </div>
      <div className="homepage_main_right">
        <img src={shivanshImage} alt="my_image"></img>
      </div>
    </div>
  );
}

export default HomePage;
