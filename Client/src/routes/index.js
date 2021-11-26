import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './routes'
const Router = () => {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Router;
