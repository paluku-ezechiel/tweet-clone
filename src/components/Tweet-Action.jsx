import React from "react";

export const TweetAct = (props) => {
  return (
    <div className="tweet-action">     
            {props.actions}
            <span>{props.chiffre}</span>
    </div>
  );
};
