import React from "react";
import { useChatContext } from "stream-chat-react";
import { userList } from "./";
import { closeCreateChannel } from "../assets/CloseCreateChannel";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const handleChange = (e) => {
    e.preventDefault();

    setChannelName(e.target.value);
  };
  return (
    <div className="channel-name-input_wrapper">
      <p>Name</p>
      <input
        type="text"
        value={channelName}
        onChange={handleChange}
        placeholder="channel-name (np spaces)"
      />
      <p>Add Members</p>
    </div>
  );
};
function CreateChannel() {
  return <div>CreateChannel</div>;
}

export default CreateChannel;
