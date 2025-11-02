import { Link, Outlet } from "react-router";

import "./App.css";
import Background from "./components/Background";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
