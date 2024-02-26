import React from "react";
import { TweetAct } from "./Tweet-Action";

export const TweetAction = (props) => {

    return(
        <div className="tweet-actions">
            <TweetAct actions={props.tweetAction.tweet_action1.image} chiffre={props.tweetAction.tweet_action1.chiffre}  />
            <TweetAct actions={props.tweetAction.tweet_action2.image} chiffre={props.tweetAction.tweet_action2.chiffre}/>
            <TweetAct actions={props.tweetAction.tweet_action3.image} chiffre={props.tweetAction.tweet_action3.chiffre}/>
            <TweetAct actions={props.tweetAction.tweet_action4.image} chiffre={props.tweetAction.tweet_action4.chiffre}/>
        </div>
    )
}
