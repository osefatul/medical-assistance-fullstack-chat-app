import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import { SearchIcon } from "../assets";
function ChannelSearch() {
  const { client, setActiveChannel } = useChatContext();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [teamChannels, setTeamChannels] = useState([]);
  const [directChannels, setDirectChannels] = useState([]);

  const getChannels = async (text) => {
    try {
      // for channels
      const channelResponse = client.queryChannels({
        type: "team",
        name: { $autocomplete: text },
        members: { $in: [client.userID] },
      });

      // for individual users
      const userResponse = client.queryUsers({
        id: { $ne: client.userID }, //we dont want find ourselved - so, exclude
        name: { $autocomplete: text },
      });
    } catch (e) {
      setQuery(" ");
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    setQuery(e.target.value);
    getChannels(e.target.value);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-serach__input__icon">
          <SearchIcon />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}

export default ChannelSearch;
