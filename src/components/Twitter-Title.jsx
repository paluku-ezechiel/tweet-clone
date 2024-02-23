import React from "react";
import { Author } from "./Tweet-Title-Author";
import image from "../icons/GroupePhoto.svg";


export const TwitterTitle = () =>{

    return(
        <div className="tweet-title">
            <Author/>
            <img src={image}/>
            {/* <img src={photoGroupe}/> */}
        </div>
    )
}