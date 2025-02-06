import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RenderRoutes } from "./routes/render-routes.tsx";
import { routes } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RenderRoutes routes={routes} />
    </BrowserRouter>
  </React.StrictMode>
);
