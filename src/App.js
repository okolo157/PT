import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Todo from "./pages/Todo";

import "./App.css";

function App() {
  return (
    <div className="app-test">
      <Header one="Home" two="about" three="services" four="contact" />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/todo" Component={Todo} />
        <Route path="/services" Component={Services} />
      </Routes>
    </div>
  );
}

export default App;
