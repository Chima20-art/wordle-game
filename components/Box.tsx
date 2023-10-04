"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface props {
  letter: string;
  isWord: Boolean;
  rowIndex: number;
  count: number;
  index: number;
  finalWord: string;
  guessedWords: Array<string>;
}

export default function Box({
  letter,
  isWord,
  rowIndex,
  count,
  finalWord,
  index,
  guessedWords,
}: props) {
  let extraClasses = "bg-white border-gray-300";

  console.log("finalWord", finalWord);
  console.log("guessedWords", guessedWords[rowIndex]);
  let arr = finalWord?.split("");

  console.log("arr", arr);
  useEffect(() => {}, [guessedWords]);

  const getColorOfLetter = () => {
    let currentWord = guessedWords[rowIndex];
    let indexesOfLetter: any = [];
    currentWord.split("").forEach((l, i) => {
      if (l == letter) indexesOfLetter.push(i);
    });
    let indexesOfLetterInFinalWord: any = [];
    finalWord.split("").forEach((l, i) => {
      if (l == letter) indexesOfLetterInFinalWord.push(i);
    });

    let tempCi = indexesOfLetter.filter(
      (item: any) => !indexesOfLetterInFinalWord.includes(item)
    );
    let tempFi = indexesOfLetterInFinalWord.filter(
      (item: any) => !indexesOfLetter.includes(item)
    );

    if (indexesOfLetterInFinalWord.length < indexesOfLetter.length) {
      if (index < tempCi[tempFi.length]) {
        return "yellow-400";
      }
      return "gray";
    } else if (indexesOfLetterInFinalWord.length > indexesOfLetter.length) {
      return "yellow-400";
    } else if ((indexesOfLetterInFinalWord.length = indexesOfLetter.length)) {
      return "yellow-400";
    }

    return "";
  };

  if (isWord && rowIndex <= count - 1) {
    extraClasses = "bg-gray-400 border-gray-300  text-white";
    // if (isWord && rowIndex <= count - 1) {
    //   if (finalWord[index] == letter) {
    //     extraClasses = "bg-green-300 text-black";
    //   } else if (finalWord.includes(letter)) {
    //     extraClasses = "bg-orange-300 text-black";
    //   }
    // }
    if (isWord && rowIndex <= count - 1) {
      if (finalWord[index] == letter) {
        extraClasses = "bg-green-500 border-green-500 text-white";
      } else if (finalWord.includes(letter)) {
        let color = getColorOfLetter();
        if (color == "yellow-400") {
          extraClasses = "bg-yellow-400 border-yellow-400 text-white";
        }
      }
    }
  }
  const variants = {
    open: { scale: [1.1, 1] },
    closed: { scale: 1 },
    flip: { rotate: [0, 180, 360] },
  };

  console.log("isWord", isWord);
  return (
    <motion.div
      animate={
        letter ? (isWord && rowIndex <= count - 1 ? "flip" : "open") : "closed"
      }
      variants={variants}
      transition={{ duration: 0.5 }}
      className={`${extraClasses} ${
        letter && rowIndex >= count - 1
          ? " border-gray-500"
          : "border-gray-300 "
      } md:w-12 md:h-12 w-10 h-10 border rounded text-2xl font-bold uppercase`}
    >
      <div className="flex items-center justify-center h-full ">{letter}</div>
        
    </motion.div>
  );
}
