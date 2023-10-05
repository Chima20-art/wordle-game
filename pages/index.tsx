import Colums from "@/components/Colums";
import Keyboard from "@/components/Keyboard";
import { useState, useEffect } from "react";
import words from "../utils/words.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Router, useRouter } from "next/router";
import Lost from "@/components/Lost";
import Won from "@/components/Won";
import Description from "@/components/Description";

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
  let [popUp, setPopUp] = useState<string>("");
  const router = useRouter();

  const notify = () => {
    if (popUp == "win") {
      toast(
        <div className=" text-center flex flex-col font-bold">
          You won! <br />
          <button
            onClick={() => {
              router.reload();
            }}
            className="bg-green-500 py-2 my-2 px-4 max-w-[150px] mx-auto rounded-md text-white"
          >
            Play again
          </button>
        </div>
      );
    }
    if (popUp == "lose") {
      toast(
        <div className=" text-center flex flex-col">
          You lost! <br />
          <div>
            {" "}
            The answer was:
            <span className="text-2xl font-bold"> {finalWord}</span>
          </div>
          <button
            onClick={() => {
              router.reload();
            }}
            className="bg-green-500 py-2 my-2 px-4 max-w-[150px] mx-auto rounded-md text-white"
          >
            Play again
          </button>
        </div>
      );
    }
  };
  const handleGame = () => {
    if (popUp == "lose") {
      <div>you lost!</div>;
    }
  };

  const processEnter = () => {
    const joinedWord = word.join("").toLocaleLowerCase();

    if (words.includes(joinedWord)) {
      setIsWord(true);
      setCount((count) => count + 1);
      setGuessedWords([...guessedWords, joinedWord]);
      setWord([]);
    } else {
      toast(<div className="text-center">Word not found 🙅🏻‍♂️ ❌</div>);
    }
  };
  useEffect(() => {
    const getRandom = (words: string[]) => {
      const randomWord = Math.floor(Math.random() * words.length);
      setFinalWord(words[randomWord]);
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
    }
  };
  useEffect(() => {
    if (guessedWords.length >= 1) {
      let lastGuessedWord = guessedWords[guessedWords.length - 1];
      if (lastGuessedWord == finalWord) {
        setIsPlaying(false);
        setPopUp("win");
        notify();
      } else if (guessedWords.length == 6 && lastGuessedWord != finalWord) {
        setPopUp("lose");
        setIsPlaying(false);
        notify();
      }
    }
  }, [guessedWords, popUp]);

  useEffect(() => {
    const passKey = (e: any) => {
      handKeyDown(e.key);
    };

    window.addEventListener("keydown", passKey, { passive: false });
    return () => {
      window.removeEventListener("keydown", passKey);
    };
  }, [word, isPlaying]);

  return (
    <div className="flex flex-col justify-start items-start  h-[100vh] w-full">
      <Colums
        word={word}
        isWord={isWord}
        count={count}
        finalWord={finalWord}
        guessedWords={guessedWords}
      />
      {popUp && (popUp == "lose" ? <Lost /> : <Won />)}
      <Keyboard
        finalWord={finalWord}
        guessedWords={guessedWords}
        handKeyDown={handKeyDown}
      />
      <Description />
      <p className="bg-[#ecf0e2] w-full text-center text-gray-500 text-xs pb-4">
        @2023 developed by{" "}
        <a
          href="https://www.michich.com/"
          className="font-bold text-xs hover:underline"
        >
          Michich
        </a>{" "}
        development.
      </p>
      <ToastContainer position="top-center" autoClose={isWord ? 2000 : false} />
    </div>
  );
}
