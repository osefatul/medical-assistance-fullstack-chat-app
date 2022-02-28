import React from "react";
import { useChatContext } from "stream-chat-react";
import { userList } from "./";
import { closeCreateChannel } from "../assets/CloseCreateChannel";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const handleChange = (event) => {
    event.preventDefault();

    setChannelName(event.target.value);
  };

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input
        value={channelName}
        onChange={handleChange}
        placeholder="channel-name"
      />
      <p>Add Members</p>
    </div>
  );
};
function CreateChannel() {
  return (
    <div>
      <ChannelNameInput />
    </div>
  );
}

export default CreateChannel;
