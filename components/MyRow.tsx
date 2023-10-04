import React, { useState, useEffect } from "react";
import Box from "./Box";
import { AnimatePresence, motion } from "framer-motion";

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
  const container = {};

  for (let index = 0; index < 5; index++) {
    boxes.push(
      <motion.div
        key={"box-" + index}
        animate={
          rowIndex <= count - 1 && {
            rotateX: [0, 360],
          }
        }
        transition={{ duration: 0.1, delay: 0.2 * index }}
      >
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
      </motion.div>
    );
  }

  return <div className="flex flex-row gap-1">{boxes}</div>;
}
