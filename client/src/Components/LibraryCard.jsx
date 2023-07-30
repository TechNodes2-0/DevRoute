/** @format */

import React from "react";



export default function LibraryCard({ libraryData }) {

  
  

    return (
      <div className="bg-gray-900">

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraryData.map((library) => (
              <div
                key={library.id}
                className={`group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl ${library.color} dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`}
              >
                <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
                  <img className="w-full h-full" src={library.icon} alt={library.name} />
                </div>
                <div className="p-4 md:p-6">
                  <span className="block mb-1 text-xs font-semibold uppercase text-white">
                    {library.name} API
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    {library.name}
                  </h3>
                  <p className="mt-3 text-gray-500">{library.description}</p>
               </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  {library.links.map((link, index) => (
                    <a
                      key={index}
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      href={link.url}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
