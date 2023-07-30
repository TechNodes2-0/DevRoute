/** @format */

import React from "react";

export default function Cards() {
  return (
    <div className="bg-gray-900">
      <h1 className="text-center text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
        {" "}
        Maps
      </h1>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            href="/RoadMap"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    Authentication
                  </h3>
                 
                </div>
                <div className="pl-3">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            href="/RoadMap2"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              State Management
                  </h3>
                </div>
                <div className="pl-3">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>

         

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                   React Router
                  </h3>
                  {/* <p className="text-sm text-gray-500">9 job positions</p> */}
                </div>
                <div className="pl-3">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    Context API
                  </h3>
                  {/* <p className="text-sm text-gray-500">11 job positions</p> */}
                </div>
                <div className="pl-3">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>

       

       


        </div>
      </div>
    </div>
  );
}
