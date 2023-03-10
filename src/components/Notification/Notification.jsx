import React from "react";

import Post from "./Post";
import Follow from "./Follow";
import Group from "./Group";
import PMessage from "./PMessage";
import Comment from "./Comment";

const Notification = (props) => {
  switch (props.type) {
    case "post":
      return <Post {...props} />
    case "follow":
      return <Follow {...props} />
    case "group":
      return <Group {...props} />
    case "pm":
      return <PMessage {...props} />
    case "comment":
      return <Comment {...props} />
    default:
      break;
  }
}

export default Notification;