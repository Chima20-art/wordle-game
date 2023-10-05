"use client";
import MyRow from "./MyRow";

interface props {
  word: Array<string>;
  isWord: boolean;
  count: number;
  finalWord: string;
  guessedWords: Array<string>;
}

export default function Colums({
  word,
  isWord,
  count,
  finalWord,
  guessedWords,
}: props) {
  let Columns: JSX.Element[] = [];
  for (let index: number = 0; index < 6; index++) {
    Columns.push(
      <div key={index}>
        <MyRow
          finalWord={finalWord}
          count={count}
          rowIndex={index}
          isWord={isWord}
          guessedWords={guessedWords}
          word={index == count ? word : []}
        />
      </div>
    );
  }
  //console.log("finalWord", finalWord);

  return (
    <div className=" flex flex-col w-full items-center justify-center py-4  ">
      <div className="flex flex-col gap-1">{Columns}</div>
    </div>
  );
}
