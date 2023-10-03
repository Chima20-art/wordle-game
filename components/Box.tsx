"use client";
import { useState, useEffect } from "react";

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
  let extraClasses = "bg-white";

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
        return "orange";
      }
      return "gray";
    } else if (indexesOfLetterInFinalWord.length > indexesOfLetter.length) {
      return "orange";
    } else if ((indexesOfLetterInFinalWord.length = indexesOfLetter.length)) {
      return "orange";
    }

    return "";
  };

  if (isWord && rowIndex <= count - 1) {
    extraClasses = "bg-gray-300 border-gray-300 text-black";
    // if (isWord && rowIndex <= count - 1) {
    //   if (finalWord[index] == letter) {
    //     extraClasses = "bg-green-300 text-black";
    //   } else if (finalWord.includes(letter)) {
    //     extraClasses = "bg-orange-300 text-black";
    //   }
    // }
    if (isWord && rowIndex <= count - 1) {
      if (finalWord[index] == letter) {
        extraClasses = "bg-green-300 text-black";
      } else if (finalWord.includes(letter)) {
        let color = getColorOfLetter();
        if (color == "orange") {
          extraClasses = "bg-orange-300 text-black";
        }
      }
    }
  }
  return (
    <div
      className={`${extraClasses} md:w-12 md:h-12 w-10 h-10 border rounded text-xl font-medium 
      uppercase`}
    >
      <div className="flex items-center justify-center h-full ">{letter}</div>
        
    </div>
  );
}
