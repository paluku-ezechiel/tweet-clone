import React from "react";

export const TweetAct = (props) =>{
console.log(props)
    return(
        <div className="tweet-action">
             <img src={props.actions}/>
                {props.chiffre}  
        </div>
        
    )
}