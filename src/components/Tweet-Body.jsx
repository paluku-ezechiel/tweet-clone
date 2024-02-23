import React from "react";
import { TwitterTitle } from "./Twitter-Title";
import { TweetText } from "./Tweet-Text";
import { TweetImage } from "./Tweet-Image";
// import photoGroupe from "../icons/GroupePhoto.svg";

export const TweetBody = () =>{
    return(
        <div className="tweet-body">
            <TwitterTitle/>
            <TweetText/>
            <TweetImage/>
        </div>
    )
}