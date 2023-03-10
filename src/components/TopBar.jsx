import React, { useEffect, useState } from "react";

function TopBar({ notif, markAsRead }) {
  const [notifCount, setNotifCount] = useState(0);

  useEffect(() => {
    let count = 0;
    notif.forEach(({ read }) => {
      if (!read) {
        count += 1;
      }
    });

    setNotifCount(count);
  }, []);

  function handleClick() {
    markAsRead();
    setNotifCount(0);
  }

  return (
    <div className="top-bar">
      <h1 className="heading">Notifications</h1>
      <span className="badge">{notifCount}</span>
      <button className="mark-as-read" onClick={handleClick}>
        Mark all as read
      </button>
    </div>
  );
}

export default TopBar;