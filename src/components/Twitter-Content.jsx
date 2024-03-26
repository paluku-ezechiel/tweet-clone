import React from "react";
import { TweetBody } from "./Tweet-Body";
import { TweetAction } from "./Tweet-Actions";

export const TwitterContent = ({tweetContent, order}) =>{
    
    return(
        <div className="tweet-content">
            <TweetBody tweetBody={tweetContent.tweet_body} order={order}/>
            <TweetAction tweetAction={tweetContent.tweet_actions}/>
        </div>
    )
}