import React, { useState } from "react";

const CommentSection = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      onAddComment(newComment.trim());
      setNewComment("");
    }
  };

  return (
    <div id="comment-section" className="comment-section">
      <h4 className="text-sm md:text-xl font-bold mb-2">Comments:</h4>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="comment-item mb-2 border-0 rounded-lg bg-gray-700 p-2"
        >
          <p className="text-xs md:text-lg text-gray-400">{comment.content}</p>
          <p className="text-xs text-gray-300">- {comment.author}</p>
        </div>
      ))}
      <div className="add-comment mt-4">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="placeholder-sm md:placeholder-xl text-sm md:text-xl w-full px-4 py-2 text-black rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add your comment..."
        />
        <button
          onClick={handleAddComment}
          className="text-sm md:text-xl  px-4 py-2 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

const ThreadDetail = ({ thread }) => {
  return (
    <div className="thread-detail">
      <h3 className="text-sm md:text-xl font-bold mb-4">{thread.title}</h3>
      <p className="text-xs md:text-lg text-gray-400 mb-4">{thread.content}</p>
      <p className="text-xs md:text-lg text-gray-300">Author: {thread.author}</p>
    </div>
  );
};

const CommunityForum = () => {
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: "How can I update my github repository from my local computer?",
      author: "Danogbans",
      content: "This is first thread. Welcome to our forum!",
      comments: [
        { id: 1, author: "Alice", content: "Hello Joce thread!" },
        { id: 2, author: "Bob", content: "Hi there! I'm glad to be here." },
      ],
    },
    {
      id: 2,
      title: "I want to use Vue component in Laravel.",
      author: "Madhava04A",
      content: "This is the first thread. Welcome to our forum!",
      comments: [
        { id: 1, author: "Alice", content: "Hello John! Nicthread!" },
        { id: 2, author: "Bob", content: "Hi there! I'm glad to be here." },
      ],
    },
    {
      id: 3,
      title: "Need help with analysis of DNS queries",
      author: "Madhava04A",
      content: "This is the first thread. Welcome to our fm!",
      comments: [
        { id: 1, author: "Alice", content: "Hello John! Ne thread!" },
        { id: 2, author: "Bob", content: "Hi there! I'm glad to be here." },
      ],
    },
    {
      id: 4,
      title: "Open Source + GitHub + Git Bootcamp what should be included... ?",
      author: "Kevin Lewis",
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
      <div className="flex justify-center">
        <div className="threads-list rounded-xl border-0 w-xl bg-slate-800 p-5">
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
        <div className="max-w-96 comments-section p-5 mx-5 border-0 rounded-xl bg-gray-800">
          {currentThread && (
            <>
              <ThreadDetail thread={currentThread} />
              <hr className="my-4" />
              <CommentSection
                comments={currentThread.comments}
                onAddComment={handleAddComment}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;
