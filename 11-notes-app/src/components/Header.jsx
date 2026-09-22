import { Sun } from "lucide-react";
import logo from "../assets/sticky-note.png";

function Header() {
  return (
    <header className="bg-blue-600 h-16 w-full flex justify-between items-center px-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
        <div className="flex flex-col">
          <h1 className="text-white font-bold leading-tight text-lg">Note App</h1>
          <span className="text-blue-100 text-xs">Capture your thoughts, stay organized</span>
        </div>
      </div>
      <div className="flex items-center">
        <Sun className="text-white h-6 w-6 cursor-pointer hover:opacity-80" />
      </div>
    </header>
  );
}

export default Header;