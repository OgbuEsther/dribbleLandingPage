import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "../HomeScreen";

const AllRoutes = () => {
  let elements = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);
  return elements;
};

export default AllRoutes;
