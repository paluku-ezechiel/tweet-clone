import React from "react";
import { TwitterAvatar } from "./Twitter-Avatar";
import { TwitterContent } from "./Twitter-Content";

export const Tweet = () => {
    return(
        <div className="tweet">
            <TwitterAvatar/>
            <TwitterContent/>
        </div>
    )
}