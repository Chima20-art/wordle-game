import React from "react";
import { useEffect } from "react";

interface props {
  handKeyDown: (pressedKey: string) => void;
  guessedWords: Array<string>;
  finalWord: string;
}
export default function Keyboard({
  handKeyDown,
  guessedWords,
  finalWord,
}: props) {
  let guessedLetters: Array<string> = [];
  let includedLetters: Array<string> = [];
  let validLetters: Array<string> = [];

  guessedWords.map((guessedWord) => {
    for (let i: number = 0; i < 5; i++) {
      for (let j: number = 0; j < guessedWord.length; j++) {
        if (guessedWord[j] == finalWord[j]) {
          console.log("this is valide", finalWord[j]);
          validLetters.push(guessedWord[j]);
        } else if (finalWord.includes(guessedWord[j])) {
          console.log("It includes this:", guessedWord[j]);
          includedLetters.push(guessedWord[j]);
        } else {
          guessedLetters.push(guessedWord[j]);
        }
      }
    }
  });

  console.log("guessedLetters ", guessedLetters);
  console.log("includedLetters ", includedLetters);
  console.log("validLetters ", validLetters);
  console.log("finalWord", finalWord);

  const handleExtraClasses = (key: string) => {
    key = key.toLocaleLowerCase();
    if (key != "Enter" && key != "Bspace") {
      console.log("dealing with key ", key);
      if (validLetters.includes(key)) {
        console.log("key is valid ", key);
        return "bg-green-400 text-white px-0 w-full";
      } else if (includedLetters.includes(key)) {
        console.log("key is included ", key);
        return "bg-orange-400 text-white px-0 w-full";
      } else if (guessedLetters.includes(key)) {
        console.log("key is guessed ", key);
        return "bg-gray-400 text-white px-0 w-full";
      } else {
        console.log(
          "key is none ",
          key,
          validLetters,
          includedLetters,
          guessedLetters
        );
        return "bg-gray-200 px-0 w-full";
      }
    } else {
      console.log("none at all ", key);
      return "px-[12px] w-full bg-gray-200 hover:bg-gray-300";
    }
  };

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
    <div className="flex flex-col gap-2 md:w-[604px] w-full my-10 md:mx-auto p-4">
      <div className="flex flex-row  justify-between  gap-1 ">
        {keys.map((key) => {
          return (
            <div
              key={key}
              onClick={() => handKeyDown(key)}
              className={`${handleExtraClasses(
                key
              )} rounded-md w-full text-center py-[6px] text-md cursor-pointer `}
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
              onClick={() => handKeyDown(key)}
              className={`${handleExtraClasses(
                key
              )} rounded-md w-full text-center py-[6px] text-md cursor-pointer `}
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
              onClick={() => handKeyDown(key)}
              className={`${handleExtraClasses(
                key
              )}  text-center py-[6px] text-md cursor-pointer rounded-md `}
            >
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
}