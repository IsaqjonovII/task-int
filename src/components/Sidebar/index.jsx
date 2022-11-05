import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { routes, ROUTES_LINK } from "../../routes";
import c from "./Style.module.css";

const Sidebar = () => {
  return (
    <div className={c.sidebar__container}>
      <div className={c.sidebar__link__wrapper}>
        {ROUTES_LINK?.map(({ id, link, title, icon }) => (
          <NavLink
            className={(route) =>
              route.isActive ? `${c.sidebar__link__active} ${c.sidebar__link}` : c.sidebar__link
            }
            to={link}
            key={id}
          >
            <span className={c.icon}>{icon}</span>
            {title}

          </NavLink>
        ))}
      </div>
      <div className={c.pages__container}>
        <Routes>
          {routes?.map(({ path, key, component }) => (
            <Route path={path} key={key} element={component} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Sidebar;
