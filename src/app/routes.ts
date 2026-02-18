import { createBrowserRouter } from "react-router";
import { LandingPage } from "./LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
]);
