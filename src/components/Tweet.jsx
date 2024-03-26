import React from "react";
import { TwitterAvatar } from "./Twitter-Avatar";
import { TwitterContent } from "./Twitter-Content";


export function Tweet({param, order}) {

  // console.log(props)

   return(
    <div className="tweet">
      <TwitterAvatar avatar={param.avatar} order= {order} />
      <TwitterContent tweetContent={param.tweet_content} order={order}/>
    </div>
   )
    
}
