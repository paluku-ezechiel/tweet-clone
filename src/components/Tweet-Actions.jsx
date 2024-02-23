import React from "react";
import { TweetAct } from "./Tweet-Action";
import btn from '../icons/Buton.svg';
import btn1 from '../icons/Buton-1.svg';
import btn2 from '../icons/Buton-2.svg';
import btn3 from '../icons/Buton-3.svg';

export const TweetAction = () => {

    return(
        <div className="tweet-actions">
            <TweetAct value={btn} text="19" />
            <TweetAct value={btn1} text="48"/>
            <TweetAct value={btn2} text="482" />
            <TweetAct value={btn3}/>
        </div>
    )
}
