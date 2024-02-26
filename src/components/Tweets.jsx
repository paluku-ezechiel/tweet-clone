import React from "react";
import { Tweet } from "./Tweet";
import { tweet_data } from "./Data";

export const Tweets = () => {
  return (
    <div className="tweets">
      {tweet_data.map((param, key) => {
        return <Tweet key={key} param={param} />;
      })}
    </div>
  );
};
