import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import HomeRoutes from "home/routes";
import ClientRoutes from "clients/routes";
import "./styles.scss";

const Router = () => {
  const routes = [...HomeRoutes, ...ClientRoutes, { path: "/", element: Home }];

  return (
    <BrowserRouter>
      <div className="orchestrator">
        <ul className="navbar">
          <Link to={"/home"}>
            <li>Home</li>
          </Link>
          <Link to={"/clients"}>
            <li>Clients</li>
          </Link>
        </ul>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={true}
                element={<route.element />}
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
