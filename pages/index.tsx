import Colums from "@/components/Colums";
import Keyboard from "@/components/Keyboard";
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

export default function Home() {
  let [guessedWords, setGuessedWords] = useState<Array<string>>([]);
  let [word, setWord] = useState<Array<string>>([]);
  let [isWord, setIsWord] = useState<boolean>(false);
  let [count, setCount] = useState<number>(0);
  let [finalWord, setFinalWord] = useState<string>("");
  let [isPlaying, setIsPlaying] = useState<Boolean>(true);

  const processEnter = () => {
    const joinedWord = word.join("").toLocaleLowerCase();

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
    const getRandom = (words: string[]) => {
      const randomWord = Math.floor(Math.random() * words.length);
      setFinalWord(words[randomWord]);
      console.log("chosenWord:", words[randomWord]);
    };
    getRandom(words);
  }, []);

  const handKeyDown = (pressedKey: string) => {
    if (!isPlaying) {
      return;
    }

    let wordLength = word.length;
    if (alphabets.includes(pressedKey)) {
      if (wordLength < 5) {
        setWord((prev) => [...prev, pressedKey]);
      } else {
        console.log("word length is ", word.length);
      }
    } else {
      if (pressedKey == "Backspace" || pressedKey == "Bspace") {
        setWord((word) => word.slice(0, -1));
      }
      if (wordLength == 5 && pressedKey == "Enter") {
        processEnter();
      }

      console.log("pressed key in not in alphabets");
    }
  };
  useEffect(() => {
    if (guessedWords.length >= 1) {
      let lastGuessedWord = guessedWords[guessedWords.length - 1];
      if (lastGuessedWord == finalWord) {
        alert("You won!");
        setIsPlaying(false);
      } else if (guessedWords.length == 6 && lastGuessedWord != finalWord) {
        alert("You lose!");
        setIsPlaying(false);
      }
    }
  }, [guessedWords]);

  useEffect(() => {
    const passKey = (e: any) => {
      handKeyDown(e.key);
    };

    window.addEventListener("keydown", passKey);
    return () => {
      window.removeEventListener("keydown", passKey);
    };
  }, [word]);

  return (
    <div className="flex flex-col justify-start items-start  h-[100vh] w-full">
      <Colums
        word={word}
        isWord={isWord}
        count={count}
        finalWord={finalWord}
        guessedWords={guessedWords}
      />
      <Keyboard
        finalWord={finalWord}
        guessedWords={guessedWords}
        handKeyDown={handKeyDown}
      />
    </div>
  );
}
