import React from "react";
import { Tweet } from "./Tweet";
import { tweet_data } from "./Data";

export const Tweets = () => {
  return (
    <div className="tweets">
      {tweet_data.map((param, index) => {
        return <Tweet key={index} param={param} order={index}/>;
      })}
    </div>
  );
};
