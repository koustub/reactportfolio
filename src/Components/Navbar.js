import React from 'react';
import { Link, useLocation } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
             <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
             Portfolio <i class="fas fa-id-card"></i>
            </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
            <Link to="/Home" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
             </li>
            <li class="nav-item active">
            <Link to="/Projects" className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>
              Projects
            </Link>
            </li>
          </ul>
        </div>
      </nav>

    );
}

export default Navbar;