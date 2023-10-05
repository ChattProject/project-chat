import React from "react";
import send from "../../../images/chat/send.svg";
import "./InputMessage.css";

export const InputMessage = ({
  addMessageToChat,
  userName,
  setMessage,
  message,
}) => {
  const handleSetMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName && message.trim() !== "") {
      const messageData = {
        id: Date.now() + Math.random(),
        posted: new Date(),
        user: userName,
        text: message,
      };
      addMessageToChat(messageData);

      setMessage("");
      event.target.reset();
    }
  };

  return (
    <div className={"input-message"}>
      <form className={"input-message__form"} onSubmit={handleSubmit}>
        <input
          type={"text"}
          className={"input-message__input paragraph"}
          id={"text-message"}
          onChange={handleSetMessage}
          value={message}
          placeholder={"Повідомлення..."}
          required
        />
        <button type="submit" className={"input-message__button"}>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="input-message__icon"
          >
            <path
              d="M6.97816 19.477C6.97816 20.848 8.62316 21.519 9.55516 20.527L21.5582 7.723C22.5182 6.695 21.8032 5 20.4092 5H3.49616C2.17816 5 1.50516 6.607 2.41816 7.572L6.97816 12.4V19.477ZM8.97116 18.212V11.585L3.85616 6.169C4.15916 6.491 3.93416 7.026 3.49616 7.026H19.4592L8.97116 18.212Z"
              fill="#ADADAD"
            />
            <path
              d="M8.41616 12.902L12.4262 10.952C12.6667 10.8303 12.8505 10.6199 12.9389 10.3653C13.0274 10.1106 13.0135 9.83159 12.9002 9.587C12.8471 9.46651 12.7703 9.35793 12.6743 9.26772C12.5784 9.17751 12.4653 9.10751 12.3418 9.06189C12.2183 9.01627 12.0868 8.99595 11.9553 9.00216C11.8238 9.00836 11.6948 9.04096 11.5762 9.098L7.56616 11.048C7.06916 11.29 6.85616 11.901 7.09116 12.412C7.14417 12.5327 7.22094 12.6415 7.31689 12.7319C7.41285 12.8223 7.52602 12.8925 7.64967 12.9382C7.77332 12.9839 7.90491 13.0043 8.0366 12.9981C8.16828 12.9918 8.29737 12.9592 8.41616 12.902Z"
              fill="#ADADAD"
            />
          </svg>
          {/* <img src={send} alt="send" className="input-message__icon" /> */}
        </button>
      </form>
    </div>
  );
};
