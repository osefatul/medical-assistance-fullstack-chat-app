import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { UserList } from "./";
import { CloseCreateChannel } from "../assets";

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

function EditChannel({ setIsEditing }) {
  const { channel } = useChatContext();
  const [channelName, setChannelName] = useState(channel?.data?.name); //if there is a channel name we try to get it from the channel
  const [selectedUsers, setSelectedUsers] = useState([]);

  return (
    <div className="edit-channel__container">
      <div className="edit-channel__header">
        <p>Edit Channel</p>
        <CloseCreateChannel setIsEditing={setIsEditing} />
      </div>
      <ChannelNameInput
        channelName={channelName}
        setChannelName={setChannelName}
      />
      <UserList setSelectedUsers={selectedUsers} />
      <div className="edit-channel__button-wrapper">
        <p>Save Changes</p>
      </div>
    </div>
  );
}

export default EditChannel;
