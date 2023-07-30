/** @format */

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cards from "../Components/Cards";

export default function ProfileHeroSection() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      <div className="p-16 bg-gray-900">
        <div className="p-8  shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-white text-xl">22</p>
                <p className="text-white">Article</p>
              </div>
              <div>
                <p className="font-bold text-white text-xl">10</p>
                <p className="text-white">Saved</p>
              </div>
              <div>
                <p className="font-bold text-white text-xl">89</p>
                <p className="text-white">Comments</p>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-48 h-48 bg-white mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
                src={user.picture}
              />
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Connect
              </button>
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-blue-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Message
              </button>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-white">{user.name}</h1>

            <p className="mt-8 text-white">{user.email}</p>
            <p className="mt-2 text-white">University of Computer Science</p>
          </div>
          <div className="mt-12 flex flex-col justify-center">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}
