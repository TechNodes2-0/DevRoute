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
      <div class="p-16 bg-gray-900">
        <div class="p-8  shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p class="font-bold text-white text-xl">22</p>
                <p class="text-white">Friends</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">10</p>
                <p class="text-white">Photos</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">89</p>
                <p class="text-white">Comments</p>
              </div>
            </div>
            <div class="relative">
              <img
                class="w-48 h-48 bg-white mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
                src={user.picture}
              />
            </div>
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Connect
              </button>
              <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-blue-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Message
              </button>
            </div>
          </div>
          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">{user.name}</h1>

            <p class="mt-8 text-white">{user.email}</p>
            <p class="mt-2 text-white">University of Computer Science</p>
          </div>
          <div class="mt-12 flex flex-col justify-center">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}
