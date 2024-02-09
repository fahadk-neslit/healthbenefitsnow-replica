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
    <div className="flex flex-col items-center text-textGrey p-[16px] gap-[3px] overflow-hidden">
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
      <div className="flex flex-col gap-2 items-center mt-2 w-full ml-10">
        {robotChatMessages.map((chat, index) => {
          return (
            <div className="flex flex-row items-center" key={index}>
              <div className="w-[35px] h-[35px]  justify-center items-center mr-[0.75rem]">
                {(index === robotChatMessages?.length - 1 ||
                  robotChatMessages[index + 1]?.role === "user") && (
                  <img
                    src="./images/emily.webp"
                    alt="emily"
                    height={35}
                    width={35}
                    className="rounded-full object-cover"
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
                      ? "bg-lightGrey text-textGrey"
                      : "bg-primary text-white my-1"
                  } rounded-lg p-[12px] max-w-[274px] flex items-center`}
                >
                  {index === robotChatMessages?.length - 1 &&
                  isTyping &&
                  !chat?.response ? (
                    <div>{typingSkeleton()}</div>
                  ) : chat?.type === "text" && chat?.type !== "input" ? (
                    <p className="text-[1rem] leading-tight ">
                      {chat?.role === "user"
                        ? toTitleCase(chat?.text)
                        : chat?.text}
                    </p>
                  ) : (
                    <div
                      className={`gap-[16px] p-[8px] flex  ${
                        chat?.inputs?.length > 2 ? " flex-col " : " flex-row "
                      } justify-center items-center`}
                    >
                      {chat?.inputs?.map((input) => (
                        <button
                          onClick={() => {
                            if (input?.externalLink) {
                              window.location.href = input?.href;
                            } else {
                              handleResponse(chat?.id, input?.value);
                            }
                          }}
                          className={`cursor-pointer bg-primary text-white px-3 py-[0.6rem] ${
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
                  <div className="w-[35px] h-[35px] my-2 ml-2 flex justify-end items-center ">
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
              {/* <div className="w-[60px]  h-[60px] flex justify-center items-center">
                {chat?.type === "reply" && (
                  <img
                    src="./images/emily.webp"
                    alt="emily"
                    height={35}
                    width={35}
                    className="rounded-full"
                  />
                )}
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chat;
