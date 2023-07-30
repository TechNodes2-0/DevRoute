import React, { useEffect, useState } from "react";

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
        <div key={comment.id} className="comment-item mb-2 border-0 rounded-lg bg-gray-700 p-2">
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
          onClick={() =>handleAddComment}
          className="text-sm md:text-xl  px-4 py-2 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
