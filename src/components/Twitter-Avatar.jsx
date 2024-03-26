import React from "react";
import { Link } from "react-router-dom";
// import { tweet_data } from "./Data";

export function TwitterAvatar ({avatar, order}){
    // console.log()
        return (
            <div className="tweet-avatar">
            
                <Link to={ order==0 ? "/cnn" : order==1? "/new york time":"twitter"}><img src={avatar}/></Link>
            </div>)

    
}