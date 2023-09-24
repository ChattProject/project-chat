// import "./ChatList.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import create from "../../images/chatList/create.svg";

export const ChatList = ({
  chatsList,
  setSelectedChatIndex,
  userName,
}) => {
  const [searchChat, setSearchChat] = useState("");

  const handleGoButtonClick = (index) => {
    setSelectedChatIndex(index);
  };

  const filteredChats = chatsList.filter((chat) => {
    if (typeof chat.title === "string") {
      return chat.title.toLowerCase().includes(searchChat.toLowerCase());
    }
    return false;
  });

  const handleSearchInputChange = (e) => {
    setSearchChat(e.target.value);
  };

  return (
    <>
      <div className="chatlist">
        <div className="chatlist__container">
          <div className="chatlist__header">
            Обери тему і розпочни спілкування прямо зараз
          </div>

          <fieldset className="chatlist__search">
            <input
              type="text"
              value={searchChat}
              onChange={handleSearchInputChange}
              placeholder="Пошук чатів"
              className="chatlist__input paragraph"
            />
          </fieldset>

          {/* <input
            type="text"
            name="search"
            id="search"
            className="chatlist__search"
            value={searchChat}
            onChange={handleSearchInputChange}
            placeholder="Пошук чатів"
          /> */}
          <ul className="chatlist__list">
            {filteredChats.length !== 0 ? (
              <>
                {filteredChats.map((chat, index) => (
                  <li key={chat.id} className="chatlist__item">
                    <Link
                      to={`/chat/${chat.id}`}
                      onClick={() => handleGoButtonClick(index)}
                      className="chatlist__link paragraph"
                    >
                      {chat.title}
                    </Link>
                  </li>
                ))}
                <button className="chatlist__item chatlist__more">
                  <Link className="chatlist__link chatlist__more_link paragraph">
                    + більше тем для спілкування
                  </Link>
                </button>
              </>
            ) : (
              <div className="chatlist__nochats paragraph">Немає чатів</div>
            )}
          </ul>
          {userName !== "" && (
            <Link to={"/newchat"} className="chatlist__newchat button-default">
              <img src={create} alt="add new chat" className="chatlist__add" />
              <p className="chatlist__addchat">Створити власний чат</p>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};