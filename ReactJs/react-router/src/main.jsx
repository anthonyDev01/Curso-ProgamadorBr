import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Aulas } from "./pages/aulas";
import { Sobre } from "./pages/sobre";
import { Aula } from "./pages/aula";
import { ErrorPage } from "./pages/errorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aulas",
        element: <Aulas />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/aulas/:id",
        element: <Aula />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
