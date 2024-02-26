import React from "react";
import { TweetBody } from "./Tweet-Body";
import { TweetAction } from "./Tweet-Actions";

export const TwitterContent = (props) =>{
// console.log(props.tweetContent.tweet_body);
    return(
        <div className="tweet-content">
            <TweetBody tweetBody={props.tweetContent.tweet_body}/>
            <TweetAction tweetAction={props.tweetContent.tweet_actions}/>
        </div>
    )
}