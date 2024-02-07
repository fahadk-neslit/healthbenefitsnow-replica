/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-eval */
import React, { useEffect, useState } from "react";
import { RobotQuestions } from "../utils/ChatObject";
import { toTitleCase } from "../utils/Helper";

function Chat() {
  const [robotChatMessages, setRobotChatMessages] = useState([]);
  const [orginialChatReplica, setOrginialChatReplica] = useState(() => [
    ...RobotQuestions,
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [userResponses, setUserResponses] = useState([]);

  const addNewMessage = (msgIndex) => {
    setRobotChatMessages((prev) => [...prev, RobotQuestions[msgIndex]]);
  };
  useEffect(() => {
    if (
      !robotChatMessages[robotChatMessages?.length - 1]?.hasOwnProperty(
        "response"
      ) &&
      Object.entries(userResponses)?.length === 0
    ) {
      setIsTyping(true);
      setTimeout(() => {
        addNewMessage(robotChatMessages?.length);
        setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }, 1200);
    } else if (
      ((robotChatMessages[robotChatMessages?.length - 1]?.response > "" &&
        robotChatMessages[robotChatMessages?.length - 1]?.type === "input") ||
        robotChatMessages[robotChatMessages?.length - 1]?.type !== "input") &&
      Object.entries(userResponses)?.length > 0
    ) {
      const nextQuestion = RobotQuestions?.filter((q) => {
        const alreadyExists = robotChatMessages?.filter(
          (question) => q?.id === question?.id
        );
        if (
          (!q?.condition || eval(q?.condition)) &&
          alreadyExists.length === 0
        ) {
          return true;
        }
        return false;
      });
      if (nextQuestion.length > 0) {
        setIsTyping(true);
        setTimeout(() => {
          addNewMessage(nextQuestion[0]?.id);
          setTimeout(() => {
            setIsTyping(false);
          }, 2000);
        }, 1200);
      }
    }
  }, [robotChatMessages, orginialChatReplica]);

  const handleResponse = (index, value) => {
    setRobotChatMessages((prev) =>
      prev.map((item, ind) => {
        if (item?.id === index) {
          return {
            ...item,
            response: value,
            role: "user",
            type: "text",
            text: value,
          };
        }
        return item;
      })
    );
    setOrginialChatReplica((prev) =>
      prev.map((item, ind) => {
        if (ind === index) {
          return {
            ...item,
            response: value,
            role: "user",
            type: "text",
            text: value,
          };
        }
        return item;
      })
    );
    setUserResponses((prev) => ({ ...prev, [index]: value }));
  };
  const typingSkeleton = () => {
    return (
      <div class="typing-skeleton">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center text-textGrey p-[16px] gap-[3px]">
      <p className="font-[600] font-serif">
        Offices Close Today at 8:00 PM EST
      </p>
      <h1 className="text-center font-bold text-2xl leading-[2rem] mt-[3px] tracking-wide">
        Unlock Up To $6,400 in Healthcare Tax Credits for <br /> American
        Families
      </h1>
      <div className="flex items-center flex-row relative gap-2 mt-[12px]">
        <div className="blinking-dot"></div>
        <p className="font-[200] text-[0.9rem]">Emily is Online.</p>
      </div>
      <div className="flex flex-col gap-2 items-start mt-2">
        {robotChatMessages.map((chat, index) => {
          return (
            <div className="flex flex-row" key={index}>
              <div className="w-[60px] h-[60px]  justify-center items-center">
                {(index === robotChatMessages?.length - 1 ||
                  robotChatMessages[index + 1]?.role === "user") && (
                  <img
                    src="./images/emily.webp"
                    alt="emily"
                    height={35}
                    width={35}
                    className="rounded-full"
                  />
                )}
              </div>
              <div
                className={`flex ${
                  chat?.role === "robot" ? "justify-start" : "justify-end"
                } max-w-[274px] min-w-[274px]`}
              >
                <div
                  className={`${
                    chat?.role === "robot"
                      ? "bg-lightGrey"
                      : "bg-primary text-white"
                  } rounded-lg p-3 max-w-[274px] flex items-center`}
                >
                  {index === robotChatMessages?.length - 1 &&
                  isTyping &&
                  !chat?.response ? (
                    <div>{typingSkeleton()}</div>
                  ) : chat?.type === "text" && chat?.type !== "input" ? (
                    <p className="text-[1rem]">
                      {chat?.role === "user"
                        ? toTitleCase(chat?.text)
                        : chat?.text}
                    </p>
                  ) : (
                    <div className="gap-[16px] flex flex-wrap justify-center items-center">
                      {chat?.inputs?.map((input) => (
                        <button
                          onClick={() => {
                            if (input?.externalLink) {
                              window.location.href = input?.href;
                            } else {
                              handleResponse(chat?.id, input?.value);
                            }
                          }}
                          className={`cursor-pointer bg-primary text-white p-3 ${
                            chat?.inputs?.length > 2
                              ? "min-w-[150px]"
                              : " min-w-[100px]"
                          } rounded-full`}
                        >
                          {toTitleCase(input?.value)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {chat?.role === "user" && (
                  <div className="w-[35px] h-[60px] ml-2 flex justify-end items-center ">
                    <img
                      src="./images/user.png"
                      height="100%"
                      alt="user"
                      width="100%"
                      className="rounded-full "
                    />
                  </div>
                )}
              </div>
              <div className="w-[60px]  h-[60px] flex justify-center items-center">
                {chat?.type === "reply" && (
                  <img
                    src="./images/emily.webp"
                    alt="emily"
                    height={35}
                    width={35}
                    className="rounded-full"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chat;
