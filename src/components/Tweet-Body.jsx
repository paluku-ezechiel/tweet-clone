import React from "react";
import { TwitterTitle } from "./Twitter-Title";
import { TweetText } from "./Tweet-Text";
import { TweetImage } from "./Tweet-Image";
// import photoGroupe from "../icons/GroupePhoto.svg";

export const TweetBody = (props) =>{
   
    return(
        <div className="tweet-body">
            <TwitterTitle tweetTitle={props.tweetBody.tweet_title}/>
            <TweetText tweetText={props.tweetBody.tweet_text} />
            <TweetImage tweetImage={props.tweetBody.tweet_image}/>
        </div>
    )
}