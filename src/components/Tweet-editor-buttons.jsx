import React from "react";
import { TweetActions } from "./Tweet-editor-actions";
import { Button } from "./Button";

export const TweetButtons = () =>{

    return(
        <div className="tweet-editor-buttons">
            <TweetActions/>
            <Button/>
        </div>
    )
}