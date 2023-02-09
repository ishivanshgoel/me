import React from "react";
import "./css/index.css";

function IndexControllerComponent() {
  function next() {
    console.log('next clicked')
  }

  function previous() {
    console.log('previous clicked')
  }

  return (
    <div className="item_controller">
      <div className="item_controller_container">
        <div className="item_controller_container_item" onClick={previous}>
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className="item_controller_container_item" onClick={next}>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </div>
    </div>
  );
}

export default IndexControllerComponent;
