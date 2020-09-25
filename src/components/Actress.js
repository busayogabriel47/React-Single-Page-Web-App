import React, { Component } from 'react';
import {ActressLists } from "../data/actress";
import {Link} from "react-router-dom"


const Actress = (props) => {

    let actress = ActressLists.map((person)=> {
        return (
            <div className="col-12 col-md-4">
                <Link to={`/Actress/${person.url}`}>
                    <div className="actorImage" style={{backgroundImage: "url(" + person.img_src + ")"}}>

                    </div>
                </Link>
                <h3>{person.name}</h3>
            </div>
        )
    })


    return ( 
        <div>
            <div className="container home_page">
                <div className="row">
                <div className="back"><Link to="/">Back</Link></div>
                    <div className="col-12">
                        <h2 className="mt-5 mb-5">Best Actress</h2>
                    </div>
                    {actress}
                </div>
            </div>
        </div>
     );
}
 
export default Actress;