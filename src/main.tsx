import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import { createHashRouter, RouterProvider } from "react-router-dom";

import About from "./components/about/About";
import Bees from "./components/products/Bees";
import Blog from "./components/blog/Blog";
import Candles from "./components/products/Candles";
import Home from "./components/Home";
import Honey from "./components/products/Honey";
import Pollen from "./components/products/Pollen";
import NotFound from "./components/NotFound";
import Wax from "./components/products/Wax";
import "./index.css";

const container = document.getElementById("root") as HTMLDivElement;

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/o-nas", element: <About /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/izdelki",
        children: [
          { path: "cvetlicni-med", element: <Honey /> },
          { path: "cvetni-prah", element: <Pollen /> },
          { path: "svece", element: <Candles /> },
          { path: "vosek", element: <Wax /> },
          { path: "cebelje-druzine", element: <Bees /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
