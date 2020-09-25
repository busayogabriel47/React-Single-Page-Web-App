import React, { Component } from 'react';
import {Link} from "react-router-dom";


const Actor = (props) => {

    return(
     <div>   
            <div className="container home_page">
                <div className="row">
                    <div className="back"><Link to="/actors">Back</Link></div>
                        <div className="col-12 mt-5 mb-4">
                            <div className="profile-image mb-4" style={{backgroundImage: "url(" + props.image + ")"}}></div>
                            <h2 className="mb-4">{props.name}</h2>
                            <p>{props.details}</p>
                        </div>
                </div>
            </div>
    </div>

    )
            
     
}
 
export default Actor;