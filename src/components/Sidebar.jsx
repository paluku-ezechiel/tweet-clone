import React from "react";
import { Button } from "./Button";

import {
  autreImg,
  home,
  explore,
  notification,
  message,
  bookmarks,
  lists,
  profile,
  more,
  profilePt,
} from "./Icon-image";
import { Link } from "react-router-dom";

function Sidebar() {
  const pages = [
    { image: autreImg, value: "" },
    { image: home, value: "Home" },
    { image: explore, value: "Explore" },
    { image: notification, value: "Notification" },
    { image: message, value: "Message" },
    { image: bookmarks, value: "Bookmarks" },
    { image: lists, value: "Lists" },
    { image: profile, value: "Profile" },
    { image: more, value: "More" },
  ];
  return (
    <div className="sidebar">
      {pages.map((param, index) => {
        // <TweetAction key={index} img={param.image} value={param.value} />
        return param.value == "Home" ? (
          <div className="imageValue">
            <img src={param.image} />
            <Link to={"/"}>
              <span>{param.value}</span>
            </Link>
          </div>
        ) : (
          <div className="imageValue">
            <img src={param.image} />
            <Link to={"/profile"}>
              <span>{param.value}</span>
            </Link>
          </div>
        );
      })}
      <Button />
      <div className="avatarTrends">
        <div>
          <img src={profilePt} />
        </div>
        <div>
          <span>Bradly Ortiz</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
