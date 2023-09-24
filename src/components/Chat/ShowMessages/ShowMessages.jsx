import { useEffect, useRef } from "react";
import up from "../../../images/chat/up.svg";

export const ShowMessages = ({ messages, message, userName }) => {
  const containerRef = useRef(null);
  const messagesRef = useRef(null);

  const goToTop = () => {
    containerRef.current.scrollIntoView({
      // top: 0,
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);

  function getDate(posted) {
    const date = new Date(posted);

    const year = date.getFullYear();

    // const months = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];

    function fullNumber(number) {
      if (number.toString().length === 1) {
        return `0${number}`;
      } else {
        return number;
      }
    }

    const day = fullNumber(date.getDate());
    const month = fullNumber(date.getMonth());

    const hours = fullNumber(date.getHours());
    const minutes = fullNumber(date.getMinutes());
    const seconds = fullNumber(date.getSeconds());

    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
  }
  return (
    <>
      <div className="show_message container">
        <div className={"show_message__messages"} ref={containerRef}>
          <button className="show_message__up" onClick={goToTop}>
            <img src={up} alt="up" className="show_message__up_icon" />
          </button>
          {messages?.map((card) => {
            return (
              <div
                className={`show_message__message  message ${
                  userName === card.user && "message_right"
                } ${card.id === messages.length - 1 && "message__last"}`}
                key={card.id}
              >
                <div className="message__name">{card.user}</div>
                <div className="message__text">{card.text}</div>
                <div className="message__date">{getDate(card.posted)}</div>
              </div>
            );
          })}
        </div>
        {/* {message && <div>{userName} is typing...</div>} */}
      </div>
    </>
  );
};