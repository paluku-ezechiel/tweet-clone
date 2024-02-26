import React from "react";
import { Author } from "./Tweet-Title-Author";
import { Tweet_title_detail } from "./Tweet-title-details";



export const TwitterTitle = (props) =>{

    return(
        <div className="tweet-title">
            <Author author={props.tweetTitle.tweet_title_author} />
            <img src={props.tweetTitle.image}/>
            <Tweet_title_detail tweetTitleDetail={props.tweetTitle.tweet_title_details}/>
            <Tweet_title_detail tweetTitleDetail={props.tweetTitle.dotter}/>
            <Tweet_title_detail tweetTitleDetail={props.tweetTitle.date}/>
        </div>
    )
}