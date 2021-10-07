import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to='/'>APP</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink className="nav-link" to="/vehicles">Vehicles</NavLink>
                  <NavLink className="nav-link" to="/about">About Us</NavLink>
                  <NavLink className="nav-link" to='/faq'>FAQ</NavLink>
                  <NavLink className="nav-link" to='/loginForm'>Login</NavLink>
                  <NavLink className="nav-link" to='/registerForm'>Register</NavLink>
            
                </div>
              </div>
            </div>
          </nav>
         );
    }
}
 
export default Navbar;