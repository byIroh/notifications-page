import React from "react";

const Post = ({ read, userName, profileImg, event, postTitle, date }) => {
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
          <a href="/" className="post-title">{postTitle}</a>
          {!read && <span className="dot"></span>}
        </p>
        <span className="time">{date}</span>
      </div>
    </div>
  );
}

export default Post;