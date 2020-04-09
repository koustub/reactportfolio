import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './Components/Home';
import Projects from './Components/Project';
import Footer from './Components/footer';
function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`} >
    <Navbar />
    <div className="App">

      <Route  path={["/","/Home","/reactportfolio"]} component={HomePage} />
      <Route exact path="/Project" component={Projects} />
    </div>
    <Footer />
    </Router>
  );
}

export default App;
