import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './Components/Home';
import Projects from './Components/Project';
import Footer from './Components/footer';
function App() {
  return (
    <Router>
    <Navbar />
    <div className="App">
      <Route  path={["/","/Home"]} component={HomePage} />
      <Route  path="/Project" component={Projects} />
    </div>
    <Footer />
    </Router>
  );
}

export default App;
