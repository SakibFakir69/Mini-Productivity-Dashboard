import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, RouterProvider } from "react-router-dom";
import Router from "./routes/routes.jsx";
import Contextapi from "./context/Contextapi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <Contextapi>
      <RouterProvider router={Router}/>
    </Contextapi>
  </StrictMode>
);
