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
        path: "/Swipe/tatooine",
        element: <Swipe filter={"tatooine"} />,
      },
      {
        path: "/Description/tatooine/:id",
        element: <Description filter={"tatooine"} />,
      },
      {
        path: "/Swipe/naboo",
        element: <Swipe filter={"naboo"} />,
      },
      {
        path: "/Description/naboo/:id",
        element: <Description filter={"naboo"} />,
      },
      {
        path: "/Swipe/coruscant",
        element: <Swipe filter={"coruscant"} />,
      },
      {
        path: "/Description/coruscant/:id",
        element: <Description filter={"coruscant"} />,
      },
      {
        path: "/Swipe/toydaria",
        element: <Swipe filter={"toydaria"} />,
      },
      {
        path: "/Description/toydaria/:id",
        element: <Description filter={"toydaria"} />,
      },
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
