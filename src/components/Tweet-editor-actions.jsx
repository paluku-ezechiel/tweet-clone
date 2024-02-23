import React from "react";
import group from "../icons/Group.svg";
import gif from "../icons/Gif.svg";
import poll from "../icons/Poll.svg";
import emoji from "../icons/Emoji.svg";
import schedule from "../icons/Schedule.svg";

export const TweetActions = () => {

    return(
        <div className="tweet-editor-actions">
            <img src={group} alt="Groupe"/>
            <img src={gif} alt="Gif"/>
            <img src={poll} alt="Poll"/>
            <img src={emoji} alt="Emoji"/>
            <img src={schedule} alt="Schedule"/>

        </div>
    )
}