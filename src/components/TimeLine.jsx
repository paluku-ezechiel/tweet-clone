import React from "react";
import { Header } from "./Header";
import { Editor } from "./Tweet-editor";
import { Tweets } from "./Tweets";


function Time() {

    return(
        <div className="timeline">
            <Header/>
            <Editor/>
            <Tweets/>
            
        </div>
        
        
    )
}

export default Time;