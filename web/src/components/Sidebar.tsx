function Sidebar() {
  return (
    <div className="bg-slate-100 h-screen pt-8  pl-8 w-64 ">
      <div className="flex-col">
        <button className=" bg-zinc-700 text-white p-3 rounded-lg">
          Create Tags
        </button>
        <ul className="flex items-center justify-between mt-3 space-x-4 bg-green-300 p-2 rounded-md ">
          <li className="text-lg">College</li>
          <li className="bg-white rounded-full px-2 py-0.3">1</li>
        </ul>
        <ul className="flex items-center mt-3 space-x-4 bg-green-300 p-2 rounded-md ">
          <li className="text-lg">College</li>
          <li className="bg-white rounded-full px-2 py-0.3">1</li>
        </ul>
        <ul className="flex items-center mt-3 space-x-4 bg-green-300 p-2 rounded-md ">
          <li className="text-lg">College</li>
          <li className="bg-white rounded-full px-2 py-0.3">1</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
