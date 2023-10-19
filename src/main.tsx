import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";

const container = document.getElementById("root") as HTMLDivElement;

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
