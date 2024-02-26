import React from "react";
import { TwitterAvatar } from "./Twitter-Avatar";
import { TwitterContent } from "./Twitter-Content";


export function Tweet(props) {

   return(
    <div className="tweet">
      <TwitterAvatar avatar={props.param.avatar} />
      <TwitterContent tweetContent={props.param.tweet_content}/>
    </div>
   )
    
}
