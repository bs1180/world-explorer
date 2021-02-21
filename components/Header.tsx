import { Backpack } from "./Backpack";

export const Header = () => (
  <div className="flex items-center m-16">
    <Backpack />
    <span className="w-8" />
    <h1 className="text-6xl inline font-bold">World Explorer</h1>
  </div>
);
