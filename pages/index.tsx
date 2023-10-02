import Colums from "@/components/Colums";
import Keyboard from "@/components/Keyboard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start  h-[100vh] w-full">
      <Colums />
      <Keyboard />
    </div>
  );
}
