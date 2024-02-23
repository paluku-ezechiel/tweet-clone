import React from "react";

export const TweetAct = ({value, text}) =>{

    return(
        <div className="tweet-action">
            <img src={value}/>
            {text}
        </div>
        
    )
}