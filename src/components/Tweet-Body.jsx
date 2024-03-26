import React from "react";
import { TwitterTitle } from "./Twitter-Title";
import { TweetText } from "./Tweet-Text";
import { TweetImage } from "./Tweet-Image";
// import photoGroupe from "../icons/GroupePhoto.svg";

export const TweetBody = ({tweetBody, order}) =>{
   
    return(
        <div className="tweet-body">
            <TwitterTitle tweetTitle={tweetBody.tweet_title} order={order}/>
            <TweetText tweetText={tweetBody.tweet_text} />
            <TweetImage tweetImage={tweetBody.tweet_image}/>
        </div>
    )
}