import { PlusCircle } from "lucide-react";

function Navbar() {
  return (
    <div className="flex justify-between p-5 fixed top-0 left-0 w-full bg-slate-300 shadow-sm  text-black z-50">
      <div>Todo</div>
      <div>
        <ul>
          <li className="">
            <PlusCircle />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
