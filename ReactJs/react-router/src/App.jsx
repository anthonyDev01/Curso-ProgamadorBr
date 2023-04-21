import { NavBar } from "./components/navbar";
import { Home } from "./pages/home";
import { Aulas } from "./pages/aulas";
import { Sobre } from "./pages/sobre";
import { Aula } from "./pages/aula";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
