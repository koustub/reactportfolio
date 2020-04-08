import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './Components/Home';
import Projects from './Components/Project';
import Footer from './Components/footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div class="container">
      <Route exact path={["/","/Home","/reactportfolio"]} component={HomePage} />
      <Route path="/Projects" component={Projects} />
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
