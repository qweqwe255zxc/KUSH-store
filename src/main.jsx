import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Catalog from "./pages/catalog/Catalog.jsx";
import Contact from "./pages/Contact.jsx";
import Kushverse from "./pages/Kushverse.jsx";
import { createBrowserRouter, RouterProvider, Navigate, } from "react-router-dom";
import { buildTitle } from "./utils/buildTitle.js";
import ProductPage from './pages/productPage/ProductPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="catalog" replace /> },
      {
        path: "catalog/:category?", element: <Catalog />, handle: { title: buildTitle('catalog') }, meta: { title: buildTitle('catalog') },
        // children: [
        //   { path: "item/:id", element: <ProductPage />, handle: { title: buildTitle('product') }, meta: { title: buildTitle('product') } },
        // ]
      },
      { path: "catalog/:category/item/:id/:brand?/:model?", element: <ProductPage />, handle: { title: buildTitle('item') }, meta: { title: buildTitle('item') } },
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
