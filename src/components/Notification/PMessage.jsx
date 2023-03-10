import React from "react";

const PMessage = ({ read, userName, profileImg, event, message, date }) => {
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
        <p className="pm">{message}</p>
      </div>
    </div>
  );
}

export default PMessage;