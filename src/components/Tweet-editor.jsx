import React from "react";
import { Avatar } from "./Avatar";
import { Form } from "./Twitter-editor-form";


export const Editor = () => {

    return(
        <div className="tweet-editor">
            <Avatar/>
            <Form/>
        </div>
    )
}