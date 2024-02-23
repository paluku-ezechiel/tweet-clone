import React from "react";
import { TweetBody } from "./Tweet-Body";
import { TweetAction } from "./Tweet-Actions";

export const TwitterContent = () =>{

    return(
        <div className="tweet-content">
            <TweetBody/>
            <TweetAction/>
        </div>
    )
}