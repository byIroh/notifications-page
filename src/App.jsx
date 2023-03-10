import React, { useState } from "react";

import "./App.css";

import TopBar from "./components/TopBar";
import Feed from "./components/Feed";

import notifData from "./assets/notifications";

const App = () => {
  const [notifications, setNotifications] = useState(notifData);

  function markAsRead() {
    setNotifications(
      notifications.map((n) => {
        if (!n.read) {
          return {
            ...n,
            read: true,
          }
        } else {
          return n
        }
      })
    );
  }

  return (
    <main>
      <TopBar
        notif={notifications}
        markAsRead={markAsRead}
      />
      <Feed notif={notifications} />
    </main>
  );
}

export default App;