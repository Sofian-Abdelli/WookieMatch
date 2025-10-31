import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App";

// page components

import Home from "./pages/Home";
import Swipe from "./pages/Swipe";
import Description from "./pages/Description";
// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Swipe",
        element: <Swipe filter={"tatooine"} />,
      },
      {
        path: "/Description/:id",
        element: <Description filter={"tatooine"} />,
      },
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
