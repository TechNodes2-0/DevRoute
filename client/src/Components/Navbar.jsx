import React from "react";

function Navbar() {
  return (
    <div className="text-sm md:text-lg border-0 rounded-2xl bg-gray-700 text-white mx-[1vw] my-2 cursor-default">
      <div className=" py-3 px-[5vw] bg-gray-800 rounded-2xl">
        <div className="flex flex-row justify-between ">
          <div className="my-auto mx-1">
            <p>LOGO</p>
          </div>
          <div className="flex my-auto  mx-1 h-8">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 border text-black border-gray-300 rounded-l-md focus:outline-none "
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-2  rounded-r-md">
              🔍
              </button>
          </div>
          <div className="my-auto mx-1">
            <div className="font-semibold flex">
              <button className="py-1 px-3 border-0 rounded-lg bg-blue-700 hover:bg-blue-800 mx-1">
                LogIn
              </button>
              <button className="max-md:hidden py-1 px-3 border-0 rounded-lg bg-blue-700 hover:bg-blue-800 mx-1">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 text-sm">
        <div className="mx-auto">
          <div className="flex w-64 justify-around">
            <a className="mx-1 font-semibold hover:text-blue-400">Home</a>
            <a className="mx-1 font-semibold hover:text-blue-400">Search</a>
            <a className="mx-1 font-semibold hover:text-blue-400">contact</a>
            <a className="mx-1 font-semibold hover:text-blue-400">about</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
