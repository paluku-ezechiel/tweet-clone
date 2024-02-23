import React from "react";
import avatar from "../images/Profile-Photo.png"


export const Avatar = () => {

    return(
        <div className="avatar">
            <img src={avatar} alt="avatar"/>
        </div>
    )
}

