import { Backpack } from "./Backpack";

export const Header = () => (
  <header className="flex items-center justify-between w-full">
    <Backpack />
   
    <h1 className="text-2xl md:text-6xl inline font-bold">World Explorer</h1>
  </header>
);
