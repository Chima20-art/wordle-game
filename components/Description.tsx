export default function Description() {
  return (
    <div className="bg-[#ecf0e2] flex flex-col w-full justify-center items-center py-8 mt-12 text-3xl">
      <strong className="md:text-3xl text-xl pb-4 ">
        Wordle Game: Guess the Hidden Word
      </strong>
      <p className="md:text-[16px] text-xs font-[300] text-gray-500 md:max-w-[75%] max-w-[90%] leading-snug md:text-center text-justify">
        The rules are very simple: You need to guess the hidden word (5 letters)
        in 6 tries. To get started, just type any word on the first line. If the
        letter is guessed correctly and is in the correct place, it will be
        highlighted in green 🟢, if the letter is in the word, but in the wrong
        place - in yellow 🟡, and if the letter is not in the word, it will
        remain gray 🪨.{" "}
        <span className="font-medium">
          Can you guess the hidden word in 6 tries?
        </span>
      </p>
    </div>
  );
}
