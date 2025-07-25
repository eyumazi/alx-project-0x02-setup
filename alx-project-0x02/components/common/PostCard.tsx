import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <div className="text-xs text-gray-500">
        User ID: {userId} | Post ID: {id}
      </div>
    </div>
  );
};

export default PostCard;
