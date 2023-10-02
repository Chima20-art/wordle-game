"use client";

interface props {
  letter: string;
  isWord: Boolean;
  rowIndex: number;
  count: number;
  index: number;
  finalWord: string;
}

export default function Box({
  letter,
  isWord,
  rowIndex,
  count,
  finalWord,
  index,
}: props) {
  let extraClasses = "bg-white";

  if (isWord && rowIndex <= count - 1) {
    extraClasses = "bg-gray-300 border-gray-300  text-black";
    if (isWord && rowIndex <= count - 1) {
      if (finalWord[index] == letter) {
        extraClasses = "bg-green-300 text-black";
      } else if (finalWord.includes(letter)) {
        extraClasses = "bg-orange-300 text-black";
      }
    }
  }
  return (
    <div
      className={`${extraClasses} w-14 h-14 border rounded flex text-xl font-medium items-center justify-center relative uppercase`}
    >
      <div>{letter}</div>  
    </div>
  );
}
