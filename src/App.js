import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import CollaborativeProjects from "./components/CollaborativeProjects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App-header">
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/collaborativeProjects" component={CollaborativeProjects} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
