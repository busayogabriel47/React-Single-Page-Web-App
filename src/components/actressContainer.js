import React, { Component } from 'react';
import { ActressLists } from "../data/actress";
import Actres from "./actres";
import Actress from "./Actress";
import { Route } from "react-router-dom"; 

const ActressContainers = (props) => {
    let actresUrl = ActressLists.map((actres) => {
        return(
            <Route path={`/Actress/${actres.url}`} render={() => <Actres image={actres.img_profile} name={actres.name} details={actres.description}/>}/>
        )

    })

    return (
        <>
        <Route exact path="/Actress" render={ () => <Actress />} />
            {actresUrl}
        </>
    )
}

export default ActressContainers;