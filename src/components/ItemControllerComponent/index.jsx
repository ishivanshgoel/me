import React, { useState } from "react";
import "./css/index.css";

function IndexControllerComponent({ page, wrapperSetParent }) {
  const [current, setCurrent] = useState(page);
  function next() {
    setCurrent(current + 1);
    wrapperSetParent(current + 1);
  }

  function previous() {
    if (current > 0) {
      setCurrent(current - 1);
      wrapperSetParent(current - 1);
    }
  }

  return (
    <div className="item_controller">
      <div className="item_controller_container">
        <button className="item_controller_container_item" onClick={previous}>
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button className="item_controller_container_item" onClick={next}>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
}

export default IndexControllerComponent;
