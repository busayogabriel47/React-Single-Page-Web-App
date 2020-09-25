import React, { Component } from 'react';
import {ActorLists} from "../data/actors";
import {Link} from "react-router-dom";


const Actors = () => {
let actors = ActorLists.map((person)=> {

    return(
            <div className="col-12 col-md-4 actorPage">
                <Link to={`/actors/${person.url}`}>
                    <div className="actorImage" style={{backgroundImage: "url(" + person.img_src + ")"}}>
                    </div>
                </Link>
                <h3>{person.name}</h3>
            </div>
    )
});

    return(
     <div>   
            <div className="container home_page">
                <div className="row">
                    <div className="back"><Link to="/">Back</Link></div>
                        <div className="col-12">
                            <h2 className="mt-5 mb-5">Best Actors</h2>
                        </div>
                    {actors}
                </div>
            </div>
    </div>

    )
            
     
}
 
export default Actors;