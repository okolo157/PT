import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import About from "./About.js";
import Service from "./Service.js";
import NewCard from "./NewCard.js";
import Todo from "./CreateTodo.js";
import Contact from "./Contact.js";
function App() {
  return (
    <div className="App">
      <Header />
      <NewCard />
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/Service" Component={Service} />
        <Route path="/About" Component={About} />
        <Route path="/Todo" Component={Todo} />
        <Route path="/Contact" Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
