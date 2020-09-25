import React, { Component } from 'react';
import {NavLink, Link} from "react-router-dom";




const Navbar = (props) => {
    return ( 
      <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand" to="/">Oscar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <NavLink class="nav-link" activeClassName="activate" exact to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" activeClassName="activate" to="/actors">Best Actors</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" activeClassName="activate" to="/Actress">Best Actress</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" activeClassName="activate" to="/Films">Films</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>  
      </>  

     );
}
 
export default Navbar;