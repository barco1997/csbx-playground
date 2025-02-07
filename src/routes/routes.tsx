import { Navigate } from "react-router-dom";
import { getPath } from "./utils";

import { Route } from "./types";
import { Main } from "../layouts/main/main";

export const routes: Route[] = [
  {
    view: "REDIRECT",
    element: <Navigate to={getPath({ view: "MAIN_ABOUT" })} />,
  },
  {
    view: "MAIN",
    layout: (props) => <Main {...props} />,
    children: [
      {
        view: "MAIN_ABOUT",
        element: <div>ABOUT</div>,
      },
      {
        view: "MAIN_FEEDBACK",
        element: <div>FEEDBACK</div>,
      },
    ],
  },
  {
    view: "CONTACTS",
    element: <div>CONTACTS</div>,
  },
];
