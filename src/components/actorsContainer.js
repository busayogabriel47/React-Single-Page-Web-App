import React, { Component } from 'react';
import { ActorLists } from "../data/actors";
import Actor from "./actor";
import Actors from "./actors";
import { Route } from "react-router-dom"; 

const ActorContainers = (props) => {
    let actorUrl = ActorLists.map((actor) => {
        return(
            <Route path={`/actors/${actor.url}`} render={() => <Actor image={actor.img_profile} name={actor.name} details={actor.description}/>}/>
        )

    })

    return (
        <>
        <Route exact path="/actors" render={ () => <Actors />} />
            {actorUrl}
        </>
    )
}

export default ActorContainers;