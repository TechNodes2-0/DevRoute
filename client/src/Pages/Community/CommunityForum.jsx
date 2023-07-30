import React, { useState } from "react";
import ThreadDetail from "./ThreadDetail";
import CommentSection from "./CommentSection";

const CommunityForum = () => {
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: "First Thread",
      author: "Johoe",
      content: "This is first thread. Welcome to our forum!",
      comments: [
        { id: 1, author: "Alice", content: "Hello Joce thread!" },
        { id: 2, author: "Bob", content: "Hi there! I'm glad to be here." },
      ],
    },
    {
      id: 2,
      title: "second Thread",
      author: "Joh",
      content: "This is the first thread. Welcome to our forum!",
      comments: [
        { id: 1, author: "Alice", content: "Hello John! Nicthread!" },
        { id: 2, author: "Bob", content: "Hi there! I'm glad to be here." },
      ],
    },
    {
      id: 3,
      title: "third Thread",
      author: "Johne",
      content: "This is the first thread. Welcome to our fm!",
      comments: [
        { id: 1, author: "Alice", content: "Hello John! Ne thread!" },
        { id: 2, author: "Bob", content: "Hi there! I'm glad to be here." },
      ],
    },
    {
      id: 4,
      title: "fourth Thread",
      author: "JohnDoe",
      content: "This is the first thread. Welcome to r forum!",
      comments: [
        { id: 1, author: "Alice", content: "Hello John! Nice thread!" },
        { id: 2, author: "Bob", content: "Hi there! I' to be here." },
      ],
    },
  ]);

  const [currentThread, setCurrentThread] = useState(null);

  const handleThreadClick = (thread) => {
    setCurrentThread(thread);
  };

  const handleAddComment = (comment) => {
    if (currentThread) {
      const newCommentObj = {
        id: Date.now(),
        author: "CurrentUser", // Replace with actual user information
        content: comment,
      };

      setThreads((prevThreads) => {
        const updatedThreads = prevThreads.map((thread) => {
          if (thread.id === currentThread.id) {
            return {
              ...thread,
              comments: [...thread.comments, newCommentObj],
            };
          }
          return thread;
        });

        return updatedThreads;
      });
    }
  };

  return (
    <div className="community-forum p-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4 text-center my-10">Discussion</h2>
      <div className=" flex justify-center">
        <div className="threads-list  rounded-xl border-0  max-w-xl bg-slate-800 p-5">
          {threads.map((thread) => (
            <div
              key={thread.id}
              className="thread-item p-4 border-0 bg-slate-900 rounded-xl mb-4 overflow-hidden cursor-pointer hover:bg-gray-700"
              onClick={() => handleThreadClick(thread)}
            >
              <h3 className="text-sm md:text-xl font-bold mb-2">
                {thread.title}
              </h3>
              <p className="text-xs md:text-lg text-gray-400 mb-1">
                {thread.content}
              </p>
              <p className="text-xs md:text-lg text-gray-300">
                Author: {thread.author}
              </p>
            </div>
          ))}
        </div>
        <div className="min-w-0 comments-section p-5 mx-5 border-0 rounded-xl bg-gray-800">
          {currentThread && (
            <React.Fragment>
              <ThreadDetail thread={currentThread} />
              <hr className="my-4" />
              <CommentSection
                comments={currentThread.comments}
                onAddComment={handleAddComment}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;
