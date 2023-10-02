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
      className={`${extraClasses} md:w-14 md:h-14 w-10 h-10 border rounded text-xl font-medium 
      uppercase`}
    >
      <div className="flex items-center justify-center h-full ">{letter}</div>
        
    </div>
  );
}
