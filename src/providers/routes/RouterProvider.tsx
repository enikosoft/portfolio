import { RouterProvider as Router } from "react-router-dom";
import { routes } from "./utils";

export const RouterProvider = () => {
  return <Router router={routes()} />;
};
