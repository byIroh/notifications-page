import React from "react";

import Notification from "./Notification/Notification";

function Feed({ notif }) {
  return (
    <div className="feed">
      {notif.map((n, index) => {
        return (
          <Notification
            key={index}
            {...n}
          />
        );
      })}
    </div>
  );
}

export default Feed;