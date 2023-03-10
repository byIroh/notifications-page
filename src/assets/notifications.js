const notifData = [
  {
    type: "post",
    read: false,
    userName: "Mark Webber",
    profileImg: "images/avatar-mark-webber.webp",
    event: "reacted to your recent post",
    postTitle: "My first tournament today!",
    date: "1m ago",
  },
  {
    type: "follow",
    read: false,
    userName: "Angela Gray",
    profileImg: "images/avatar-angela-gray.webp",
    event: "followed you",
    date: "5m ago",
  },
  {
    type: "group",
    read: false,
    userName: "Jacob Thompson",
    profileImg: "images/avatar-jacob-thompson.webp",
    event: "has joined your group",
    groupName: "Chess Club",
    date: "1 day ago",
  },
  {
    type: "pm",
    read: true,
    userName: "Rizky Hasanuddin",
    profileImg: "images/avatar-rizky-hasanuddin.webp",
    event: "sent you a private message",
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    date: "5 days ago",
  },
  {
    type: "comment",
    read: true,
    profileImg: "images/avatar-kimberly-smith.webp",
    userName: "Kimbery Smith",
    event: "commented on you picture",
    commentedImg: "images/image-chess.webp",
    date: "1 week ago",
  },
  {
    type: "post",
    read: true,
    profileImg: "images/avatar-nathan-peterson.webp",
    userName: "Nathan Peterson",
    event: "reacted to your recent post",
    postTitle: "5 end-game strategies to increase your win rate",
    date: "2 weeks ago",
  },
  {
    type: "group",
    read: true,
    profileImg: "images/avatar-anna-kim.webp",
    userName: "Anna Kim",
    event: "left the group",
    groupName: "Chess Club",
    date: "2 weeks ago",
  },
];

export default notifData;