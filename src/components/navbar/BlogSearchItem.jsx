import React from "react";

export default function BlogSearchItem({ blog }) {
  // Destructure properties with default values
  const { title = "No Title", content = "No Content", files = [] } = blog;

  // Handle cases where files or file.url may be undefined
  const imageUrl = files.length > 0 ? files[0]?.file?.url : "";

  return (
    <a
      href={
        blog.source === "blog" ? "/blog/" + blog._id : "/article/" + blog._id
      }
      className="divul"
    >
      {imageUrl ? (
        <img src={imageUrl} alt={title || "Blog Image"} />
      ) : (
        <div className="placeholder">No Image Available</div>
      )}
      <div className="info">
        <h4>{title}</h4>
        <p>{content ? content.substring(0, 100) : "No Content Available"}</p>
      </div>
    </a>
  );
}
