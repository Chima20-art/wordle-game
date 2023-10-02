import React from "react";
export default function Keyboard() {
  const keys: string[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondKeys: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdKeys: string[] = [
    "Bspace",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "Enter",
  ];

  return (
    <div className="flex flex-col gap-2 md:w-[604px] w-full my-10 mx-auto">
      <div className="flex flex-row  justify-between  gap-1 ">
        {keys.map((key) => {
          return (
            <div
              key={key}
              className=" bg-gray-200 rounded-md w-full text-center py-[6px] text-md cursor-pointer hover:bg-gray-300"
            >
              {key}
            </div>
          );
        })}
      </div>
      <div className="flex w-full gap-1 justify-between ">
        {secondKeys.map((key) => {
          return (
            <div
              key={key}
              className="bg-gray-200 rounded-md w-full text-center py-[6px] text-md cursor-pointer hover:bg-gray-300"
            >
              {key}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row  justify-between gap-1">
        {thirdKeys.map((key) => {
          return (
            <div
              key={key}
              className={`${
                key == "Enter" || key == "Bspace" ? "px-[18px] " : "px-0 w-full"
              }  bg-gray-200 text-center py-[6px] text-md cursor-pointer hover:bg-gray-300 rounded-md `}
            >
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
}
