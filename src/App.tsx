import React from "react";
import { MdWifi } from "react-icons/md";
import { BsBatteryFull } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import { LuPaperclip } from "react-icons/lu";
import chatData from "./data";
import { BsCamera } from "react-icons/bs";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { GoChecklist } from "react-icons/go";
import{BiSolidBadgeCheck} from "react-icons/bi"
import { FaSignal } from "react-icons/fa";
import "./App.css";

function App() {
  const chatMessages = chatData;
  return (
    <div className="App">
      <div className="flex flex-row  justify-between">
        <h1 className="text-[22px] font-semibold mx-4 p-3 ">9:41</h1>
        <div className="flex  gap-2 p-4 ">
          {/* <MdWifi size={"24px"} /> */}
          <FaSignal size={"24px"} />
          <MdWifi size={"24px"} />
          <BsBatteryFull size={"24px"} />
        </div>
      </div>
      <div className="flex mt-8 justify-between">
        <div className="flex gap-2 ">
          <div className="mt-2">
            <AiOutlineArrowLeft size={"23px"} />
          </div>
          <h1 className="text-[24px] font-bold">{chatMessages.name}</h1>
        </div>
        <div className="mx-2">
          <FaRegEdit size={"22px"} />
        </div>
      </div>
      <div className="flex flex-row mt-4">
        <img
          className="rounded-full h-[20%] w-[14%] lg:h-[10%] lg:w-[7%] mt-2 mx-2"
          src={
            "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0"
          }
        />
        <div className="mx-4">
          <p className="lg:text-[19px]">
            From{" "}
            <span className="font-bold text-[20px] lg:[28px] text-gray-700">
              {chatMessages.from}
            </span>
          </p>
          <p className="lg:text-[19px]">
            To{" "}
            <span className="font-bold text-[20px] lg:text-[26px] text-gray-700">
              {chatMessages.to}
            </span>
          </p>
        </div>
      </div>
      <div
        className="mt-4 h-screen flex  "
        style={{
          opacity: "0.3",
          flex: 1,
          height: "0.7px",
          backgroundColor: "gray",
          width: "100%",
        }}
      ></div>
      <div className="flex mt-20">
        <div
          className="mt-4 h-screen m-4  "
          style={{
            opacity: "0.3",
            flex: 1,
            height: "1.5px",
            backgroundColor: "gray",
            width: "40%",
          }}
        ></div>
        <p className="text-gray-400">7 November, 2023</p>
        <div
          className="mt-4 h-screen m-4"
          style={{
            opacity: "0.4",
            flex: 1,
            height: "1.5px",
            backgroundColor: "gray",
            width: "40%",
          }}
        ></div>
      </div>

      <div className=" flex  flex-col mx-6">
        {chatData.chats.map((chat) => {
          return (
            <>
              <div
                key={chat.id}
                className={chat.sender.self ? "message self" : "message other"}
              >
                {!chat.sender.self && (
                  // <div className="">
                  <>
                
                    <img
                      className="rounded-full h-[20%] w-[11%]  mt-2 lg:w-[53px] "
                      src={chat.sender.image}
                      alt="User"
                    />
                    {/* <div className="mt-[29px] my-20  ">
                    <BiSolidBadgeCheck/>
                    </div> */}
                    
                    </>
                  // </div>
                )}
                <div className="bg-red-100 chat-section p-3 mt-4 lg:mt-9 mx-2 ">
                  <p>{chat.message}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="flex justify-between  ">
        <div className="form-input relative mx-2 p-2">
          <span className="absolute inset-y-0 right-4 pl-3 flex items-center lg:mx-6 mx-1">
            <VscSend size={"24px"} />
          </span>

          <div className="tooltip-container absolute inset-y-0 right-8 pr-3 flex items-center lg:mx-10">
            <div className="tooltip">
              <div className="tooltip rounded-full mt-2 mx-4">
                {" "}
                <LuPaperclip size={"23px"} />
                <span className="tooltiptext rounded-full ">
                  <div className="flex p-3 gap-5 text-center">
                    <span className="">
                      <BsCamera size={"25px"} />
                    </span>
                    <span className="">
                      <VscDeviceCameraVideo size={"27px"} />
                    </span>
                    <span className="">
                      <GoChecklist size={"25px"} />
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>

          <input
            className="pl-3  py-3  lg:w-full w-[100%] rounded-2xl "
            type="email"
            name="email"
            placeholder="Reply to @Rohit Yadav"
          />
        </div>
      </div>

      <div
        className="mt-4 h-screen flex my-6 m-auto rounded-full "
        style={{
          flex: 1,
          height: "6px",
          backgroundColor: "black",
          width: "40%",
        }}
      ></div>
      
    </div>
  );
}

export default App;
