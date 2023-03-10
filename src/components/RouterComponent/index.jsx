import React from "react";
import "./css/index.css";
import { useNavigate, useLocation } from "react-router-dom";

function RouterComponent({ pages }) {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = (path, redirect) => {
    if(redirect) {
      window.location.href = redirect;
    } else {
      navigate(path);
    }
  };

  return (
    <div className="router">
      <div className="router_container">
        {pages.map((page) => (
          <div
            className={
              location.pathname === page.path
                ? "router_container_item_active"
                : "router_container_item"
            }
            id={page.path}
            onClick={() => onClick(page.path, page.redirect)}
          >
            <span class="material-symbols-outlined" id={page.path}>
              {page.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RouterComponent;
