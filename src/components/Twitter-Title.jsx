import React from "react";
import { Author } from "./Tweet-Title-Author";
import { Tweet_title_detail } from "./Tweet-title-details";
import {Link} from 'react-router-dom';

export const TwitterTitle = ({tweetTitle, order}) => {
  return (
    <Link to={ order == 0 ? "/cnn": order==1? "/new york time":"/twitter"}>
      <div className="tweet-title">
        <Author author={tweetTitle.tweet_title_author} />
        <img src={tweetTitle.image} />
        <Tweet_title_detail
          tweetTitleDetail={tweetTitle.tweet_title_details}
        />
        <Tweet_title_detail tweetTitleDetail={tweetTitle.dotter} />
        <Tweet_title_detail tweetTitleDetail={tweetTitle.date} />
      </div>
    </Link>
  );
};
