import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Catalog from "./pages/catalog/Catalog.jsx";
import Contact from "./pages/Contact.jsx";
import Kushverse from "./pages/Kushverse.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { buildTitle } from "./utils/utils.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="catalog" replace /> },
      { path: "catalog", element: <Catalog />, handle: { title: buildTitle('catalog') }, meta: { title: buildTitle('catalog') } },
      { path: "kushverse", element: <Kushverse />, handle: { title: buildTitle('kushverse') }, meta: { title: buildTitle('kushverse') } },
      { path: "contact", element: <Contact />, handle: { title: buildTitle('contact') }, meta: { title: buildTitle('contact') } },
    ],
  },
]);

document.title

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
