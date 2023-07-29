import React from "react";

const ThreadDetail = ({ thread }) => {
  return (
    <div className="thread-detail">
      <h3 className="text-sm md:text-xl font-bold mb-4">{thread.title}</h3>
      <p className="text-xs md:text-lg text-gray-400 mb-4">{thread.content}</p>
      <p className="text-xs md:text-lg text-gray-300">Author: {thread.author}</p>
    </div>
  );
};

export default ThreadDetail;
