"use client";
import MyRow from "./MyRow";
import { useState, useEffect } from "react";
import words from "../utils/words.json";

let alphabets: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function Colums() {
  let [guessedWords, setGuessedWords] = useState<Array<any>>([]);
  let [word, setWord] = useState<Array<string>>([]);
  let [isWord, setIsWord] = useState<Boolean>(false);
  let [count, setCount] = useState<number>(0);
  let [finalWord, setFinalWord] = useState<string>("");
  let [isPlaying, setIsPlaying] = useState<Boolean>(true);

  const processEnter = () => {
    const joinedWord = word.join("");
    console.log("joinedWord", joinedWord);

    if (words.includes(joinedWord)) {
      setIsWord(true);

      setCount((count) => count + 1);
      setGuessedWords([...guessedWords, joinedWord]);

      setWord([]);
    } else {
      alert("word not found");
    }
  };
  useEffect(() => {
    console.log("guessed words", guessedWords);
    if (guessedWords.length >= 1) {
      let lastGuessedWord = guessedWords[guessedWords.length - 1];
      if (lastGuessedWord == finalWord) {
        alert("You won");
        setIsPlaying(false);
      }
    }
  }, [guessedWords]);

  useEffect(() => {
    const getRandom = (words: string[]) => {
      const randomWord = Math.floor(Math.random() * words.length);
      setFinalWord(words[randomWord]);
      console.log("chosenWord:", words[randomWord]);
    };
    getRandom(words);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const handKeyDown = (e: any) => {
        const pressedKey = e.key;
        console.log("pressedkey:", pressedKey);
        let wordLength = word.length;
        if (alphabets.includes(pressedKey)) {
          console.log("wordLength ", wordLength);
          if (wordLength < 5) {
            setWord((prev) => [...prev, pressedKey]);
          } else {
            console.log("word.length < 5 is false");
            console.log("word length is ", word.length);
          }
        } else {
          if (pressedKey == "Backspace") {
            setWord((word) => word.slice(0, -1));
          }
          if (wordLength == 5 && pressedKey == "Enter") {
            processEnter();
          }

          console.log("pressed key in not in alphabets");
        }
      };
      window.addEventListener("keydown", handKeyDown);
      return () => {
        window.removeEventListener("keydown", handKeyDown);
      };
    }
  }, [word, isPlaying]);

  let Columns: JSX.Element[] = [];
  for (let index: number = 0; index < 6; index++) {
    Columns.push(
      <div key={index}>
        <MyRow
          finalWord={finalWord}
          count={count}
          rowIndex={index}
          isWord={isWord}
          guessedWord={guessedWords[index]}
          word={index == count ? word : []}
        />
      </div>
    );
  }

  console.log("guessedWords in :", guessedWords);

  return (
    <div className=" flex flex-col w-full items-center justify-center ">
      <div className="text-3xl text-center">{finalWord}</div>
      <div className="flex flex-col gap-1">{Columns}</div>
    </div>
  );
}
