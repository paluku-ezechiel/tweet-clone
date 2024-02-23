import React from "react";
import { TweeterInput } from "./Tweet-editor-input";
import { TweetButtons } from "./Tweet-editor-buttons";

export const Form = () => {

    return (
        <div className="tweet-editor-form">
            <TweeterInput/>
            <TweetButtons/>
        </div>
    )
}