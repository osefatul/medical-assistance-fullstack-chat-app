import React, { useEffect, useState } from "react";
import { Avatar, useChatChannel } from "stream-chat-react";
import { InviteICon } from "../assets";

// All reacts component has access to specific props called "children". so whatever compnents you render inside of this. that is going to be populated in to the children prop. in our case it is UseList component and it will b populated in children
const ListContainer = ({ children }) => {
  return (
    <div className="user-list__container">
      <div className="user-list__header">
        <p>User</p>
        <p>Invite</p>
      </div>
      {children}
    </div>
  );
};

const UserItem = () => {
  return (
    <div className="user-item__wrapp">
      <div className="user-item__name-wrapper">
        <Avatar />
      </div>
    </div>
  );
};

const UserList = () => {
  return <ListContainer className="">UserList</ListContainer>;
};

export default UserList;
