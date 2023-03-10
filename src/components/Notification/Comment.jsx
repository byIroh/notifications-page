import React from "react";

const Comment = ({ read, userName, profileImg, event, commentedImg, date }) => {
  return (
    <div className={read ? "read" : "unread"}>
      <img
        className="user-img"
        src={profileImg}
        alt="profile picture"
      />
      <div className="content">
        <p>
          <a href="/" className="user-name">{userName} </a>
          <span className="event">{event} </span>
          {!read && <span className="dot"></span>}
        </p>
        <span className="time">{date}</span>
      </div>
      <img
        className="commented-img"
        src={commentedImg}
        alt="commented picture"
      />
    </div>
  );
}

export default Comment;