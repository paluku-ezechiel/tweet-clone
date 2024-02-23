import React from "react";
import { Tweet } from "./Tweet";

export const Tweets = () => {

    // const dataObject = [
    //     {
    //         user:{
    //             author:'CNN',
    //             time  :'7m',
    //             image :""
    //         }
    //     }
    // ]

    return(
        <div className="tweets">
            <Tweet/>
        </div>
    )
}