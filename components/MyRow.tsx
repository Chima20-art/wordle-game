import React, { useState, useEffect } from "react";
import Box from "./Box";

interface props {
  rowIndex: number;
  word: Array<string>;
  guessedWord: Array<any>;
  isWord: Boolean;
  count: number;
  finalWord: string;
}

export default function MyRow({
  rowIndex,
  word,
  guessedWord,
  isWord,
  count,
  finalWord,
}: props) {
  const boxes = [];

  console.log("guessedWord in", rowIndex, " myRow:", guessedWord);

  for (let index = 0; index < 5; index++) {
    boxes.push(
      <Box
        finalWord={finalWord}
        count={count}
        rowIndex={rowIndex}
        key={index}
        index={index}
        isWord={isWord}
        letter={guessedWord ? guessedWord[index] : word[index]}
      />
    );
  }
  return <div className="flex flex-row gap-1">{boxes}</div>;
}
