import React, { useState, useEffect } from "react";
import Box from "./Box";

interface props {
  rowIndex: number;
  word: Array<string>;
  guessedWords: Array<string>;
  isWord: Boolean;
  count: number;
  finalWord: string;
}

export default function MyRow({
  rowIndex,
  word,
  guessedWords,
  isWord,
  count,
  finalWord,
}: props) {
  const boxes = [];

  for (let index = 0; index < 5; index++) {
    boxes.push(
      <Box
        finalWord={finalWord}
        count={count}
        rowIndex={rowIndex}
        key={index}
        index={index}
        isWord={isWord}
        guessedWords={guessedWords}
        letter={
          guessedWords[rowIndex] ? guessedWords[rowIndex][index] : word[index]
        }
      />
    );
  }
  return <div className="flex flex-row gap-1">{boxes}</div>;
}
